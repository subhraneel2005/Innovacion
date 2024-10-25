import React, { useState, useEffect } from 'react'; // Importing useState and useEffect
import "./Loader.css";

function Loader({ onLoadComplete }) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Lock scroll when component mounts
        document.body.style.overflow = 'hidden';

        const timer = setTimeout(() => {
            setIsLoaded(true);
            // Unlock scroll and notify parent component
            document.body.style.overflow = 'visible';
            onLoadComplete();
        }, 5000); // 5 seconds before hiding the loader

        return () => {
            clearTimeout(timer);
            // Ensure scroll is unlocked if component unmounts
            document.body.style.overflow = 'visible';
        };
    }, [onLoadComplete]);

    return (
        <div className={`fixed top-0 left-0 w-full h-full z-50 bg-black ${isLoaded ? 'fade-out' : 'flex justify-center items-center'}`}>
            {/* Loader Video */}
            {!isLoaded && (
                <video
                    src="/Loader.mp4" // Replace with your actual video path
                    autoPlay
                    muted
                    className="w-full h-full object-cover"
                ></video>
            )}
        </div>
    );
}

export default Loader;
