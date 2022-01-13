import React from 'react';
import '../Styles/Dropdown.scss';
const Dropdown = ({ isOpen }) => {
    return (
        <div>
            {
                isOpen &&
                <ul className='dropdown' >
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Our Projects</a></li>
                    <li><a href="#">About us</a></li>
                </ul>
            }
        </div>
    );
};

export default Dropdown;