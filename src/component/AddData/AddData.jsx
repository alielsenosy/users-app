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

export default function TransitionsModal({ addUser }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [newUser, setNewUser] = React.useState({
    name: "",
    email: "",
    phone: "",
    address: { street: "", suite: "" },
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

  const handelSubmit = () => {
    addUser(newUser);
    handleClose();
  };
  // console.log(newUser);
  return (
    <div style={{ backgroundColor: "#bdbdbd", display: "flex" }}>
      <h1>Users</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        style={{
          height: "50px",
          right: "20px",
          top: "85px",
          position: "absolute",
        }}
      >
        Add New User
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
              Add New User
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <label for="name">Enter your name</label>
              <br />
              <Input
                onChange={handelChange}
                name="name"
                sx={{ mb: 2 }}
                placeholder="Name"
                id="name"
                inputProps={ariaLabel}
              />{" "}
              <br />
              <label for="phone">Enter your phone</label>
              <br />
              <Input
                onChange={handelChange}
                name="phone"
                sx={{ mb: 2 }}
                placeholder="Phone"
                id="phone"
                inputProps={ariaLabel}
              />
              <br />
              <label for="name">Enter your email</label>
              <br />
              <Input
                onChange={handelChange}
                name="email"
                sx={{ mb: 2 }}
                placeholder="E-mail"
                id="email"
                inputProps={ariaLabel}
              />{" "}
              <br />
              <label for="street">Enter your address</label>
              <br />
              <Input
                onChange={handelChange}
                name="street"
                sx={{ mb: 2 }}
                placeholder="Address"
                id="street"
                inputProps={ariaLabel}
              />
              <br />
              <label for="suite">Enter your suite</label>
              <br />
              <Input
                onChange={handelChange}
                name="suite"
                sx={{ mb: 2 }}
                placeholder="Suite"
                id="suite"
                inputProps={ariaLabel}
              />
              <br />
              <Button
                variant="contained"
                color="success"
                onClick={handelSubmit}
              >
                Add User
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
