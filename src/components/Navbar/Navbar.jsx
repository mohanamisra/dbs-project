import './Navbar.css'

function Navbar() {
    return (
        <div className = 'navbar-container'>
            <div className = 'left'>
                <p className = 'home'>Home</p>
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
