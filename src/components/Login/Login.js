import React, { useState } from "react";
import { Link } from "react-router-dom";
import SocialButton from "../SocialButton/SocialButton";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailBlur = event => {
      setEmail(event.target.value);
  }
  return (
    <div className="input-container">
      <div className="input-area">
        <form>
          <h3>Please Login</h3>

          <input onBlur={handleEmailBlur} type="email" name="" id="" placeholder="Email" required />

          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            required
          />

          <button>Login</button>
        </form>

        <p className="google-link m-4">
          New to this site?
          <Link to="/signup">Create an Account</Link>
        </p>

        <SocialButton></SocialButton>
      </div>
    </div>
  );
};

export default Login;
