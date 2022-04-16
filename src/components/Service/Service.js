import React, { useEffect, useState } from 'react';
import ServiceInfo from '../ServiceInfo/ServiceInfo';

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('service.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <h1>this is service</h1>
            <div className='service-container'>

            </div>
            {
                services.map(service => <ServiceInfo key={service.id} service={service}></ServiceInfo> )
            }
        </div>
    );
};

export default Service;