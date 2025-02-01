import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Assuming API_URL is available globally (can be set in a config file or environment variable)
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';

const ResetPassword = () => {
    const navigate = useNavigate();
    
    // Use state for form inputs and messages
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    // Retrieve the token from localStorage or sessionStorage or URL params
    const token = localStorage.getItem('authToken'); // or sessionStorage.getItem('jwtToken')

    // If token is not available, redirect to login page
    useEffect(() => {
        console.log('Token from localStorage:', token);
        if (!token) {
            navigate('/login');
        }
    }, [token, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.patch(
                `${API_URL}/users/change-password`, 
                { oldPassword, newPassword },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setMessage(response.data.message || 'Password changed successfully.');
        } catch (error) {
            setMessage(error.response?.data?.message || 'An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <h2>Change Your Password</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Old Password</label>
                    <input
                        type="password"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>New Password</label>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Changing...' : 'Change Password'}
                </button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ResetPassword;
