import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";

const USER_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PWD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const Register = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");

  const navigate = useNavigate();
  return (
    <div className="formcontainer">
      <form className="form">
        <h1>Register</h1>
        <TextField
          className="input"
          onChange={(e) => setEmailValue(e.target.value)}
          id="outlined-search"
          label="someone@gmail.com "
        />

        <Alert
          className={
            USER_REGEX.test(emailValue) === true || emailValue === ""
              ? "hidden"
              : "visible"
          }
          severity="error"
        >
          This is an error alert — check it out!
        </Alert>

        <TextField
          className="input"
          onChange={(e) => setPasswordValue(e.target.value)}
          id="outlined-search"
          label="Password "
          type="password"
        />
        <Alert
          className={
            PWD_REGEX.test(passwordValue) === true || passwordValue === ""
              ? "hidden"
              : "visible"
          }
          severity="error"
        >
          This is an error alert — check it out!
        </Alert>
        <TextField
          className="input"
          onChange={(e) => setConfirmPasswordValue(e.target.value)}
          id="outlined-search"
          label="Confirm Password "
          type="password"
        />
        <Alert
          className={
            passwordValue === confirmPasswordValue || passwordValue === ""
              ? "hidden"
              : "visible"
          }
          severity="error"
        >
          This is an error alert — check it out!
        </Alert>

        <Button
          className="input"
          type="button"
          onClick={() => {
            localStorage.setItem("email", emailValue);
            localStorage.setItem("password", passwordValue);
            navigate("/signin", { replace: true });
          }}
          disabled={
            USER_REGEX.test(emailValue) === false ||
            PWD_REGEX.test(passwordValue) === false ||
            passwordValue !== confirmPasswordValue
          }
          variant="outlined"
        >
          {" "}
          SignUp{" "}
        </Button>

        <button
          className="textbutton"
          type="button"
          onClick={() => {
            navigate("/signin", { replace: true });
          }}
        >
          Already have an account ? Sign in
        </button>
      </form>
    </div>
  );
};

export default Register;
