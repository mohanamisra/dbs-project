import './Navbar.css'
import {useNavigate} from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/home');
    }

    return (
        <div className = 'navbar-container'>
            <div className = 'left' onClick={handleHomeClick}>
                <p className = 'home'>CryptoNivesh</p>
            </div>
            <div className = 'right'>
                <div className = 'about-us'>About</div>
                <div className = 'services'>Services</div>
                <div className = 'sign-up'>Sign Up/Log In</div>
            </div>
        </div>
    )
}

export default Navbar
