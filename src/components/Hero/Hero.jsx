import './Hero.css'
import heroImage from '../../assets/heroImage.png'

function Hero() {
    return (
        <div className = 'hero-container'>
            <div className = 'hero-content'>
                <h1 className = 'hero-heading'>
                    Track Today, Propser Tomorrow
                </h1>
                <p className = 'hero-text'>
                    Because you simply cannot afford to miss out on the crypto hype.
                    <br/>
                    <br/>
                    Welcome to investing, it's been waiting for you.
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
