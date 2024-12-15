import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Quick Links Section */}
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/Members">Team</a></li>
                        <li><a href="/Events">Events</a></li>
                    </ul>
                </div>

                {/* Location Section */}
                <div className="footer-section location-section">
                    <h3>Location</h3>
                    <div className="location-content">
                        <div className="location-text">
                            <p>Campus 13, KSAC</p>
                            <p>KIIT UNIVERSITY</p>
                            <p>Bhubaneswar, Odisha</p>
                            <p>PINCODE - 751024</p>
                        </div>
                        <div className="location-map">
                            <iframe
                                title="KIIT University KSACLocation"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.636720756204!2d85.81635307341057!3d20.356620910528086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19093cc3e1974b%3A0x85a345e1f4fcce86!2sKIIT%20Student%20Activity%20Center%20-%20KSAC!5e0!3m2!1sen!2sin!4v1733850961213!5m2!1sen!2sin"
                                width="150"
                                height="150"
                                style={{ border: "0", borderRadius: "5px" }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>



                {/* Contact Section */}
                <div className="footer-section contact-section">
                    <h3>Contact</h3>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                        <a href="mailto:kronicle@kiit.ac.in" target="_blank" rel="noopener noreferrer">kronicle@kiit.ac.in</a>
                    </div>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faFacebook} className="contact-icon" />
                        <a href="https://facebook.com/kroniclekiit" target="_blank" rel="noopener noreferrer">/kroniclekiit</a>
                    </div>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faInstagram} className="contact-icon" />
                        <a href="https://instagram.com/kroniclekiit" target="_blank" rel="noopener noreferrer">
                            /kroniclekiit</a>
                    </div>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
                        <a href="https://linkedin.com/in/kronicle_official" target="_blank" rel="noopener noreferrer">
                            /kronicle_official</a>
                    </div>
                </div>

                {/* Let Us Know Section */}
                <div className="footer-section">
                    <h3>Let us Know</h3>
                    <form>
                        <input type="text" placeholder="Your Name" required color="gray" />
                        <input type="email" placeholder="Email" required />
                        <textarea placeholder="Message" required></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;