import "./SignIn.css";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SignIn = () => {
  const [inEmailValue, setInEmailValue] = useState("");
  const [inPasswordValue, setInPasswordValue] = useState("");
  const { setAuth } = useContext(AuthContext);
  const signUPemail = localStorage.getItem("email");
  const signUPpass = localStorage.getItem("password");
  const navigate = useNavigate();

  const handleSignIn = () => {
    if (inEmailValue === signUPemail && inPasswordValue === signUPpass) {
      setAuth({ user: inEmailValue, pwd: inPasswordValue });
      navigate("/users", { replace: true });
    } else {
      alert("Wronge password or Email");
    }
  };
  return (
    <div className="formcontainer">
      <form className="form">
        <h1>Sign In</h1>

        <TextField
          className="input"
          onChange={(e) => setInEmailValue(e.target.value)}
          id="outlined-search"
          label="someone@gmail.com "
        />

        <TextField
          className="input"
          onChange={(e) => setInPasswordValue(e.target.value)}
          id="outlined-search"
          label="Password "
          type="password"
        />

        <Button
          className="input"
          type="button"
          disabled={!inEmailValue || !inPasswordValue}
          onClick={handleSignIn}
          variant="outlined"
        >
          {" "}
          Login{" "}
        </Button>

        <button
          className="textbutton"
          type="button"
          onClick={() => navigate("/register", { replace: true })}
        >
          Don't Have an account ? Register now !
        </button>
      </form>
    </div>
  );
};

export default SignIn;
