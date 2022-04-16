import React from "react";
import "./SocialButton.css";
import googleLogo from '../../images/google.png';

const SocialButton = () => {
  return (
    <div>
      <button className="google-button">
        <img src={googleLogo} alt="" /> <p>Countinue With Google</p>
      </button>
    </div>
  );
};

export default SocialButton;
