import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Facecard.css';

const FaceCard = ({ name, image }) => {
    return (
        <div className="card">
            <img src="/assets/kroniclelogo.png" alt="Logo" className="cornerlogo" />
            <h3 className="name">{name}</h3>
            <img src={image} alt={`${name}'s photo`} className="image" />
            <div className="iconContainer">
                <FaInstagram className="icon" />
                <FaTwitter className="icon" />
                <FaLinkedin className="icon" />
            </div>
        </div>
    );
};

export default FaceCard;
