'use client'

import React, { useEffect } from 'react';
import './StarryBackground.css';

const generateStars = (count) => {
    let stars = '';
    for (let i = 0; i < count; i++) {
        const x = Math.random() * 2000;
        const y = Math.random() * 2000;
        stars += `${x}px ${y}px #FFF, `;
    }
    stars = stars.slice(0, -2); // Remove the last comma and space
    return stars;
};

const StarryBackground = ({ extraClass }) => {
    useEffect(() => {
        const stars1 = generateStars(700); // Small stars
        const stars2 = generateStars(200); // Medium stars
        const stars3 = generateStars(100); // Large stars

        const styleElement = document.createElement('style');
        styleElement.innerHTML = `
      #stars { width: 1px; height: 1px; background: transparent; box-shadow: ${stars1}; animation: animStar 100s linear infinite; }
      #stars2 { width: 2px; height: 2px; background: transparent; box-shadow: ${stars2}; animation: animStar 125s linear infinite; }
      #stars3 { width: 3px; height: 3px; background: transparent; box-shadow: ${stars3}; animation: animStar 150s linear infinite; }
    `;
        document.head.appendChild(styleElement);
    }, []);

    return (
        <div className={`homepage ${extraClass || ""}`} >
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
        </div>
    );
};

export default StarryBackground;