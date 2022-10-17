import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Input from "@mui/material/Input";
const ariaLabel = { "aria-label": "description" };

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({ EditUser, data }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [newUser, setNewUser] = React.useState({
    id: data.id,
    name: data.name,
    phone: data.phone,
    email: data.email,
    address: { street: data.address?.street, suite: data.address?.suite },
  });
  const handelChange = (e) => {
    const { name, value } = e.target;
    setNewUser((currentUser) => {
      if (name === "street" || name === "suite") {
        return {
          ...currentUser,
          address: { ...currentUser.address, [name]: value },
        };
      } else {
        return { ...currentUser, [name]: value };
      }
    });
  };
  const handelSubmit = (newUser) => {
    EditUser(newUser);
    handleClose();
  };
  return (
    <div>
      <Button
        variant="contained"
        color="success"
        onClick={handleOpen}
        sx={{ ml: 1, mr: 1 }}
      >
        Edit
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Edit User
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <label htmlFor="name">Enter your name</label>
              <br />
              <Input
                onChange={handelChange}
                name="name"
                sx={{ mb: 2 }}
                value={newUser.name}
                placeholder="Name"
                id="name"
                inputProps={ariaLabel}
              />{" "}
              <br />
              <label htmlFor="phone">Enter your phone</label>
              <br />
              <Input
                onChange={handelChange}
                name="phone"
                sx={{ mb: 2 }}
                value={newUser.phone}
                placeholder="Phone"
                id="phone"
                inputProps={ariaLabel}
              />
              <br />
              <label htmlFor="email">Enter your Email</label>
              <br />
              <Input
                onChange={handelChange}
                name="email"
                sx={{ mb: 2 }}
                value={newUser.email}
                placeholder="Email"
                id="email"
                inputProps={ariaLabel}
              />
              <br />
              <label htmlFor="street">Enter your address</label>
              <br />
              <Input
                onChange={handelChange}
                name="street"
                sx={{ mb: 2 }}
                value={newUser.address.street}
                placeholder="Street"
                id="street"
                inputProps={ariaLabel}
              />
              <br />
              <label htmlFor="suite">Enter your suite</label>
              <br />
              <Input
                onChange={handelChange}
                name="suite"
                sx={{ mb: 2 }}
                value={newUser.address.suite}
                placeholder="Suite"
                id="suite"
                inputProps={ariaLabel}
              />
              <br />
              <Button
                variant="contained"
                color="success"
                onClick={() => {
                  handelSubmit(newUser);
                }}
              >
                Save
              </Button>
              <Button
                sx={{ ml: 25 }}
                variant="contained"
                color="error"
                onClick={handleClose}
              >
                {" "}
                Cancel{" "}
              </Button>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
