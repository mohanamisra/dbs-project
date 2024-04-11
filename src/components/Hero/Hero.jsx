import './Hero.css'
import heroImage from '../../assets/heroImage.png'
import SplitType from 'split-type'
import gsap from "gsap";
import React, { useEffect } from 'react';
import { useGSAP } from "@gsap/react";

function Hero() {
    useEffect(() => {
        const heroText1 = new SplitType('#hero-heading1');
        gsap.to('.char', {
            y: 0,
            stagger: 0.05,
            delay: 0.2,
            duration: 0.1
        });
        const heroText2 = new SplitType('#hero-heading2');
        gsap.to('.char', {
            y: 0,
            stagger: 0.05,
            delay: 0.2,
            duration: 0.1
        });
    }, []); // Empty dependency array ensures this effect runs only once after mount
    return (
        <div className = 'hero-container'>
            <div className = 'hero-content'>
                <h1 className = 'hero-heading'>
                    <span id = 'hero-heading1'>Track Today, </span>
                    <span id = 'hero-heading2'>Prosper Tomorrow</span>
                </h1>
                <p className = 'hero-text'>
                    Because you simply cannot afford to miss out on the crypto hype.
                    <br/>
                    <br/>
                    Welcome to crytpo, it's been waiting for you.
                </p>
                <button className = 'explore-button'>
                    Get Started
                </button>
            </div>
            <div className = 'hero-image-div'>
                <img src = {heroImage}/>
            </div>
        </div>
    )
}

export default Hero
