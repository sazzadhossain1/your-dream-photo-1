import React from "react";
import "./CheckOutData.css";

const CheckOutData = ({ checkOutData }) => {
  const { name, description, image, price} = checkOutData;
  return (
    <div className="main-container">
      <div className="img-container">
        <img src={image} alt="" />
        <div className="details">
          <h5>{name}</h5>
          <p>Price {price}Tk</p>
          <p>{description}</p>
        </div>
        <button className="book-now">Book Now</button>
      </div>
    </div>
  );
};

export default CheckOutData;
