import React from 'react';
import '../Styles/Navbar.scss';
import '../Styles/App.scss';
const Navbar = () => {

    return (
        <div className="container">
            <div className="navbar">
                <span>Agency</span>
                <a href="#" className="toggle-button">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </a>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Our Project</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
                <button>Contact Us</button>

            </div>
        </div>
    );
};

export default Navbar;