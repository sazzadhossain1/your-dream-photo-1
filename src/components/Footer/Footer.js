import React from 'react';
import './Footer.css';



const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
           <p><small>CopyRight @ {year} Wedding Photography</small></p>
        </div>
    );
};

export default Footer;