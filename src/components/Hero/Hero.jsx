import './Hero.css'
import heroImage from '../../assets/heroImage.png'

function Hero() {
    return (
        <div className = 'hero-container'>
            <div className = 'hero-content'>
                <h1 className = 'hero-heading'>
                    Welcome
                </h1>
                <p className = 'hero-text'>
                    Lorem Ipsum Something Something I cannot bother to use the generator. Enjoy.
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
