import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialButton from "../SocialButton/SocialButton";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate(from, {replace: true});
  }
  return (
    <div className="input-container">
      <div className="input-area">
        <form onSubmit={handleUserSignIn}>
          <h3>Please Login</h3>

          <input
            onBlur={handleEmailBlur}
            type="email"
            name=""
            id=""
            placeholder="Email"
            required
          />

          <input
            onBlur={handlePassword}
            type="password"
            name=""
            id=""
            placeholder="Password"
            required
          />
          {loading && <p>Loading...</p>}
          <p style={{ color: "red" }}>{error?.message}</p>
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
