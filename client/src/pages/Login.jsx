import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';
import password_icon from './assets1/passwordicon.png';
import email_icon from './assets1/mailid.png';
import backgroundpage from './assets1/backgroundpage.png';
import loginheader from './assets1/loginheader.png';
import kronicle from './assets1/kronicle.png';
import c1 from './assets1/c1.png';
import c2 from './assets1/c2.png';
import c3 from './assets1/c3.png';
import p1 from './assets1/p1.png';
import p2 from './assets1/p2.png';
import p3 from './assets1/p3.png';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(`${API_URL}/users/login`, formData);
            console.log('API response:', response.data);

            const { data } = response.data;
            if (data && data.accessToken && data.user) {
            const { accessToken,user} = data;
                localStorage.setItem('authToken', accessToken); 
               
                console.log('Stored authToken:', localStorage.getItem('authToken'));
                localStorage.setItem('user', JSON.stringify(user));
                console.log('Stored user:', localStorage.getItem('user'));
                console.log('Login successful. User:', user);
                navigate('/'); 
              } else {
                console.error('Login response missing token or user');
              }
            
        } 
        catch (error) {
          console.error('Error:', error);
            setMessage(error.response?.data?.message || 'An error occurred. Please try again.');
        } finally {
            setLoading(false);
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
                        <img src={loginheader} alt="Login Header" />
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="inputs">
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
                            placeholder="ENTER PASSWORD"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="forgot-password">
                        <span onClick={() => navigate('/ResetPassword')}>Forgot Password?</span>
                    </div>
                    {message && <p className="message">{message}</p>}
                    <div className="submit-container">
                        <button className="submit1" type="submit" disabled={loading}>
                            {loading ? 'Logging In...' : 'Login'}
                        </button>
                    </div>
                </form>
                <div className="toggle-text">
                    <p>
                        Not registered?{' '}
                        <span className="toggle-action" onClick={() => navigate('/signup')}>
                            Sign Up
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

export default Login;
