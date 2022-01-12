import React from 'react';
import '../Styles/Hero.scss';
import men from '../Images/men.png'


const Hero = () => {
    return (
        <div className="container">
            <div className="hero-section">
               <div>
               <span className="hero-title">
               Build Your <br /> Awesome <br /> Platform
               </span>
               <p>Enver studio is a digital studio that offers several services <br /> such as UI/UX Design to developers, we will provide the best <br /> service for those of you who use our services.</p>
               <button>Our Services</button>
               </div>
               <div className="hero-image">
                   <img src={men} alt="" />
               </div>
            </div>
        </div>
    );
};

export default Hero;