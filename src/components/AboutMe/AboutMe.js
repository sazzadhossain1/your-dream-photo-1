import React from "react";
import "./AboutMe.css";
import aboutMePhoto from "../../images/About-me.jpg";

const AboutMe = () => {
  return (
    <div className="aboutMe-container">
      <img src={aboutMePhoto} alt="" />
      <h1 className="mt-3">Sazzad Hossain</h1>
      <br />
      <p>
        My greatest goal as a photographer is to get people to see what I see.
        It's as simple as that. And yet so desperately tricky. I have to break
        down a scene, determine what it is that draws my eye and my mind,
        understand the light, and how to capture it. If someone can look at one
        of my photographs, and know what it is, and how I felt about it, or even
        feel the same way, I have succeeded.
      </p>
    </div>
  );
};

export default AboutMe;
