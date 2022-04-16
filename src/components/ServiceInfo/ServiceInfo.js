import React from 'react';
import './ServiceInfo.css';

const ServiceInfo = ({service}) => {
    const {name, image} = service
    return (
        <div className='info-container'>
            <img src={image} alt="" />
            <p>{name}</p>

        </div>
    );
};

export default ServiceInfo;