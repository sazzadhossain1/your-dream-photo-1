import React from "react";
import "./NotFound.css";
import photo from "../../images/page-not-found.jpg";

const NotFound = () => {
  return (
    <div>
      <div className="not-found">
        <h1 style={{color:'red'}} className="mb-5">This Page is Not Found</h1>
        <img src={photo} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
