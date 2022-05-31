import React, { useEffect, useState } from "react";
import ServiceInfo from "../ServiceInfo/ServiceInfo";
import Banner from "./Banner/Banner";
import "./Home.css";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1>Your Dream PhotOoo</h1>
      <Banner></Banner>
      <div>
        <h1 className="mt-5">Our Services</h1>
        <div className=" service-container">
          {services.map((service) => (
            <ServiceInfo key={service.id} service={service}></ServiceInfo>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
