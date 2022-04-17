import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialButton from "../SocialButton/SocialButton";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {

  const [agree, setAgree] = useState(false);



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true
    });

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

if(user){
    navigate('/')
}

  const handleCreateUser = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Your password did not match");
    }
    if (password.length < 6) {
      setError("Password must be 6 characters or longer");
    }

    await createUserWithEmailAndPassword(email, password);
  };




  return (
    <div className="input-container">
      <div className="input-area">
        <form onSubmit={handleCreateUser}>
          <h3>Please Sign up</h3>

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

          <input
            onBlur={handleConfirmPassword}
            type="password"
            name=""
            id=""
            placeholder="Confirm Password"
            required
          />

          <p style={{ color: "red" }}>{error}</p>

          <button onClick={() => setAgree(!agree)}>Sign up</button>
        </form>

        <p className="google-link m-4">
          Already have an Account?
          <Link to="/login">Please Login</Link>
        </p>

        <SocialButton></SocialButton>
      </div>
    </div>
  );
};

export default SignUp;
