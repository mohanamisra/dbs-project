import './Navbar.css'
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";

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
                <div className = 'sign-up'>
                    <Link to="/register" className="link">
                    Sign Up/Log In
                        </Link></div>
            </div>
        </div>
    )
}

export default Navbar
