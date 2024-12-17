import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src="/assets/logo1.png" alt="Logo 1" className="logo"/>
                <img src="/assets/logo2.png" alt="Logo 2" className="logo" />
                <img src="/assets/logo3.png" alt="Logo 3" className="logo" />
            </div>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>  
                <li><a href="/Members">Members</a></li>  
                <li><a href="#achievements">Achievements</a></li>
                <li><a href="/Events">Events</a></li>
                <li><a href="/login" className="login-link">Login</a></li>
                <li><a href="/signup" className="signup-link">Signup</a></li> 
            </ul>
        </nav>
    );
};

export default Navbar;
