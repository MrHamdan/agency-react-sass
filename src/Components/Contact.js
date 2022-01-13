import React from 'react';
import '../Styles/Contact.scss';
const Contact = () => {
    return (
        <div className="bg-color">
            <div className="contact-section container">
            <span className="plus"></span> 
            <span className="circle"></span>
                <div>
                    <span>Contact us for the service <br /> you want to use</span>
                </div>
                <div>
                <button>Contact Us</button> 
                </div>
            </div>
        </div>
    );
};

export default Contact;