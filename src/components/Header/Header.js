import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <div className='link-con'>
            <Link to="/">Home</Link>
            <Link to="/service">Service</Link>
            <Link to="/about">About</Link>
            <Link to='/checkOut'>Check Out</Link>
            <Link to='/signup'>Sign Up</Link>

            {
                user ?
                <Link onClick={handleSignOut} to="/login">Sign Out</Link>
                :

            <Link to='/login'>Login</Link>
            }
        </div>
    );
};

export default Header;