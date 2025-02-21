import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    window.addEventListener('resize', (event) => {
        setIsOpen(false);
        console.log("This is window's resize listner");
    });
    return (
        <header className="header">
            <nav className="navbar">
                <NavLink to="/" className="navbar-logo">Flavor Aura</NavLink>
                <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
                    <li className="navbar-item">
                        <NavLink to="/" className="navbar-links" activeClassName="active-link">Home</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink to="/about" className="navbar-links" activeClassName="active-link">About</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink to="/menu" className="navbar-links" activeClassName="active-link">Menu</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink to="/restaurant" className="navbar-links" activeClassName="active-link">Add Restaurant</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink to="/services" className="navbar-links" activeClassName="active-link">Services</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink to="/contact" className="navbar-links" activeClassName="active-link">Contact</NavLink>
                    </li>
                </ul>
                <div className='hamburger' onClick={toggleMenu}>
                    <GiHamburgerMenu className='ham-item' />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;