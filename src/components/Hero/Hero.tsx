import React from "react";
import {
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";
import "./hero.css";

const Hero = () => {
    return (
        <div className="hero-container bg-amber-50">
            <div className="profile-image">
                <img src="/path-to-your-image.png" alt="Profile" />
            </div>
            <div className="hero-text">
                <h1>
                    Hey, I'm <span>Sumit</span>.
                </h1>
                <p>I'm a product manager and data scientist.</p>
                <div className="social-links">
                    <a href="#" aria-label="Twitter">
                        <FaTwitter /> Twitter
                    </a>
                    <a href="#" aria-label="Instagram">
                        <FaInstagram /> Instagram
                    </a>
                    <a href="#" aria-label="LinkedIn">
                        <FaLinkedin /> LinkedIn
                    </a>
                    <a href="#" aria-label="GitHub">
                        <FaGithub /> Github
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
