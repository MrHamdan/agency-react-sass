import React from 'react';
import { BiMenuAltRight } from "react-icons/bi";
import '../Styles/Navbar.scss';
const Navbar = ({toggle}) => {
    return (
        <div className='navbar container'>
            <h3>Agency</h3>
            <ul className='navbar-menu'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Our Projects</a></li>
                <li><a href="#">About us</a></li>
            </ul>
            <BiMenuAltRight onClick={toggle} className='navbar-icon'/>
            <button>Contact us</button>
        </div>
    );
};

export default Navbar;