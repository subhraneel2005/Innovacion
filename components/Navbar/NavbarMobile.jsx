"use client"
import React, { useState } from 'react';
import './Menu.css'; // Import the CSS file

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="menu-container">
            <div className="hamburger" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className={`menu ${isOpen ? 'open' : ''}`}>
                <div className="close" onClick={toggleMenu}>&times;</div>
                <ul>
                    <li>Home</li>
                    <li>Events</li>
                    <li>Gallery</li>
                    <li>Partners</li>
                    <li>Contact us</li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;
