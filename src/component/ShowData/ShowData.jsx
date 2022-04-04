import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
    name: data.name,
    phone: data.phone,
    email: data.email,
    address: { street: data.address?.street, suite: data.address?.suite },
  });

  return (
    <div>
      <Button variant="contained" color="info" onClick={handleOpen}>
        Info
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
              Show user's data
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <label htmlFor="name">Name:</label>
              <p>{newUser.name}</p>
              <hr></hr>
              <label htmlFor="name">Phone:</label>
              <p>{newUser.phone}</p>
              <hr></hr>
              <label htmlFor="name">Email:</label>
              <p>{newUser.email}</p>
              <hr></hr>
              <label htmlFor="name">Address:</label>
              <p>{newUser.address.street}</p>
              <hr></hr>
              <label htmlFor="name">Suite:</label>
              <p>{newUser.address.suite}</p>
              <Button
                sx={{ ml: 22 }}
                variant="contained"
                color="error"
                onClick={handleClose}
              >
                {" "}
                Ok{" "}
              </Button>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
