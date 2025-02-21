import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
            </div>

            {/* Social Media Links */}
            <ul className="social-icon">
                <li className="social-icon__item">
                    <a 
                        className="social-icon__link" 
                        href="https://www.facebook.com" 
                        aria-label="Facebook" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FaFacebookSquare />
                    </a>
                </li>
                <li className="social-icon__item">
                    <a 
                        className="social-icon__link" 
                        href="https://www.twitter.com" 
                        aria-label="Twitter" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FaTwitterSquare />
                    </a>
                </li>
                <li className="social-icon__item">
                    <a 
                        className="social-icon__link" 
                        href="https://www.linkedin.com" 
                        aria-label="LinkedIn" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </a>
                </li>
                <li className="social-icon__item">
                    <a 
                        className="social-icon__link" 
                        href="https://www.instagram.com" 
                        aria-label="Instagram" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FaInstagramSquare />
                    </a>
                </li>
            </ul>

            {/* Navigation Menu */}
            <ul className="menu">
                <li className="menu__item"><a className="menu__link" href="/">Home</a></li>
                <li className="menu__item"><a className="menu__link" href="/about">About</a></li>
                <li className="menu__item"><a className="menu__link" href="/menu">Menu</a></li>
                <li className="menu__item"><a className="menu__link" href="/restaurant">Add Restaurant</a></li>
                <li className="menu__item"><a className="menu__link" href="/services">Services</a></li>
                <li className="menu__item"><a className="menu__link" href="/contact">Contact</a></li>
            </ul>

            <p>&copy; 2024 Shanelhai | All Rights Reserved</p>
        </footer>
    );
}

export default Footer;
