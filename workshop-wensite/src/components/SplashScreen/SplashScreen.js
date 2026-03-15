import React, { useState, useEffect } from 'react';
import './SplashScreen.css';
import logoImg from '../Hero/images/ChatGPT Image Mar 8, 2026, 10_30_09 AM.png';

const SplashScreen = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        // Animation sequence:
        // 1. Show logo with scale/fade-in (handled by CSS)
        // 2. Wait for some time
        // 3. Start fading out the entire splash screen
        // 4. Call onComplete after fade-out finishes

        const fadeOutTimer = setTimeout(() => {
            setIsFading(true);
        }, 2500); // Wait 2.5s before starting fade out

        const completeTimer = setTimeout(() => {
            setIsVisible(false);
            if (onComplete) onComplete();
        }, 3300); // Total duration before removal (2.5s + 0.8s fade duration)

        return () => {
            clearTimeout(fadeOutTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    if (!isVisible) return null;

    return (
        <div className={`splash-container ${isFading ? 'fade-out' : ''}`}>
            <div className="splash-content">
                <div className="logo-wrapper">
                    <img src={logoImg} alt="Kavitha Welding Logo" className="splash-logo" />
                </div>
                <div className="splash-loader">
                    <div className="loader-bar"></div>
                </div>
                <div className="splash-text">
                    <span className="company-name">KAVITHA WELDING WORKS</span>
                    <span className="tagline">Premium Craftsmanship</span>
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;
