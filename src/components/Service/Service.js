import React, { useEffect, useState } from 'react';
import ServiceInfo from '../ServiceInfo/ServiceInfo';
import './Service.css';

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
      fetch("service.json")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
    return (
        <div>
               
    <div>
      <h1>this is service</h1>
      <div>
        <div className=" service-container">
        {
                services.map(service => <ServiceInfo key={service.id} service={service}></ServiceInfo> )
            }
        </div>
      </div>
    </div>
        </div>
    );
};

export default Service;