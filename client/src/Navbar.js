import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src="/assets/logo1.png" alt="Logo 1" className="logo" />
                <img src="/assets/logo2.png" alt="Logo 2" className="logo" />
                <img src="/assets/logo3.png" alt="Logo 3" className="logo" />
            </div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#members">Members</a></li>
                <li><a href="#achievements">Achievements</a></li>
                <li><a href="#events">Events</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
