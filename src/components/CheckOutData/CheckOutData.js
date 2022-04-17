import React from "react";
import "./CheckOutData.css";

const CheckOutData = ({ checkOutData }) => {
  const { name, description, image, price } = checkOutData;
  return (
    <div className="main-container">
      <div className="img-container">
        <img src={image} alt="" />
      </div>
      <div className="details">
          <p>{name}</p>
          <p>Taka {price}</p>
          <p>{description}</p>
      <button>Book Now</button>
      </div>
    </div>
  );
};

export default CheckOutData;
