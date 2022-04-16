import React from "react";
import { Link } from "react-router-dom";
import SocialButton from "../SocialButton/SocialButton";

const SignUp = () => {
  return (
    <div className="input-container">
      <div className="input-area">
        <form>
          <h3>Please Sign up</h3>
          <input type="email" name="" id="" placeholder="Email" required />
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            required
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="Confirm Password"
            required
          />
          <button>Sign up</button>
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
