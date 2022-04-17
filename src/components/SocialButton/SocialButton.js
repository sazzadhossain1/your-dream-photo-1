import React from "react";
import "./SocialButton.css";
import googleLogo from "../../images/google.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";

const SocialButton = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorGoogle;

  if (error) {
    errorGoogle = (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }

  if (user) {
    navigate("/");
  }
  return (
    <div>
      <div className="parent-line">
        <div className="line"></div>
        <p className="or">or</p>
        <div className="line"></div>
        
      </div>
      {errorGoogle}
      <button onClick={() => signInWithGoogle()} className="google-button">
        <img src={googleLogo} alt="" /> <p>Countinue With Google</p>
      </button>
    </div>
  );
};

export default SocialButton;
