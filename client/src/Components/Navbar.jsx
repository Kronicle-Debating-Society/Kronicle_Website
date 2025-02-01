import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem('authToken');
      console.log('Retrieved token from localStorage:', token);
      setIsAuthenticated(!!token);
    };

    checkAuthStatus();

  
    window.addEventListener('storage', checkAuthStatus);

    return () => {
      window.removeEventListener('storage', checkAuthStatus);
    };
  }, []);

  useEffect(() => {
    console.log('Authentication state:', isAuthenticated);
  }, [isAuthenticated]);
  


  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken'); 
    setIsAuthenticated(false);
    navigate('/'); 
  };

  return (
    <nav className="navbar">
    <div className="logo-container">
      <img src="/assets/logo1.png" alt="Logo 1" className="logo" />
      <img src="/assets/logo2.png" alt="Logo 2" className="logo" />
      <img src="/assets/logo3.png" alt="Logo 3" className="logo" />
    </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Members">Members</Link></li>
        <li><Link to="/Events">Events</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li>
        {isAuthenticated ? (
    
            <button className="logout-button" 
          
            onClick={handleLogout}>
              Logout
            </button>
        ) : (
          
            <button className="login-button" onClick={handleLogin}>
              Login
            </button>

        )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
