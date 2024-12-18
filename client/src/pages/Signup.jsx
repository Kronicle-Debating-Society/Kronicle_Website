import React, { useState } from 'react';
import axios from 'axios';
import './LoginSignup.css';
import password_icon from './assets1/passwordicon.png';
import email_icon from './assets1/mailid.png';
import user_icon from './assets1/usericon.png';
import backgroundpage from './assets1/backgroundpage.png';
import signupheader from './assets1/signupheader.png';
import kronicle from './assets1/kronicle.png';
import c1 from './assets1/c1.png';
import c2 from './assets1/c2.png';
import c3 from './assets1/c3.png';
import p1 from './assets1/p1.png';
import p2 from './assets1/p2.png';
import p3 from './assets1/p3.png';


const Signup = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [message, setMessage] = useState('');
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const formData = { name: formData.name, email: formData.email, password: formData.password };
  
        const response = await axios.post   (`${process.env.REACT_URL}/users/register`, formData);

        setMessage(response.data.message);
      } 
      catch (error) {
        console.error("Error Response:", error.response?.data);
        setMessage(error.response?.data?.message || 'An error occurred. Please try again.');
      }
    };

  return (
    <div className="images">
      <img src={kronicle} alt="Kronicle" className="kronicle" />
      <img src={p1} alt="P1" className="image1" />
      <img src={p2} alt="P2" className="image2" />
      <img src={p3} alt="P3" className="image3" />
      <div className="container" style={{ backgroundImage: `url(${backgroundpage})` }}>
        <div className="header">
          <div className="text">
            <img src={signupheader} alt="Signup Header" />
          </div>
        </div>
        <form onSubmit={handleSubmit} className="inputs">
          <div className="input">
            <img src={user_icon} alt="User Icon" />
            <input
              type="text"
              name="name"
              placeholder="ENTER NAME"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <img src={email_icon} alt="Email Icon" />
            <input
              type="email"
              name="email"
              placeholder="ENTER YOUR EMAIL ID"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="Password Icon" />
            <input
              type="password"
              name="password"
              placeholder="CREATE A PASSWORD"
              value={formData.password}
              onChange={handleChange}
            />

</div>
          <div className="submit-container">
            <button className="submit1" type="submit">
              Sign Up
            </button>
          </div>
        </form>
        <div className="toggle-text">
          <p>
            Already a member?{' '}
            <span className="toggle-action" onClick={() => window.location.replace('/login')}>
              Login
            </span>
          </p>
        </div>
        
                <div className="c1">
                <img src={c1} alt="" />
              </div>
              <div className="c2">
                <img src={c2} alt="" />
              </div>
              <div className="c3">
                <img src={c3} alt="" />
              </div>
              </div>
      </div>
  );
};

export default Signup;