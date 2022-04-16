import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='link-con'>
            <Link to="/">Home</Link>
            <Link to="/service">Service</Link>
            <Link to="/about">About</Link>
            <Link to='/checkOut'>Check Out</Link>
        </div>
    );
};

export default Header;