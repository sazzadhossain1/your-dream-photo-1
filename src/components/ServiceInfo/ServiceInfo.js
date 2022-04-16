import React from "react";
import { Link } from "react-router-dom";
import "./ServiceInfo.css";

const ServiceInfo = ({ service }) => {
  const { name, image, price, description } = service;

  return (
    <div>
      <div className="info-container">
        <img src={image} alt="" />
        <div className="information">
        <h5>{name}</h5>
        <p>Price-{price}Tk</p>
        <p>{description}</p>
        </div>
        <button className="checkOut mb-3">
          <Link to="/checkOut">Check Out</Link>
        </button>
      </div>
    </div>
  );
};

export default ServiceInfo;
