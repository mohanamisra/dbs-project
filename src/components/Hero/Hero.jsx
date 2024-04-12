import './Hero.css'
import heroImage from '../../assets/heroImage.png'
import SplitType from 'split-type'
import {gsap} from "gsap";
import React, { useEffect } from 'react';

function Hero() {

    useEffect(() => {
        const heroText = new SplitType('.hero-heading', {types: 'lines'})
        const lines = heroText.lines;

        gsap.fromTo(
            lines,
            {
                x: -200,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                stagger: 0.05,
                duration: 2,
                ease: 'power4.out',
            }
        )
    }, [])

    return (
        <div className = 'hero-container'>
            <div className = 'hero-content'>
                <h1 className = 'hero-heading'>
                    Track Today,<br/> Propser Tomorrow
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
