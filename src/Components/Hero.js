import React from 'react';
import '../Styles/Hero.scss';
import men from '../Images/men.png'
import { AiOutlineArrowRight } from "react-icons/ai";


const Hero = () => {
    return (
        <div className="container">
            <div className="hero-section">
               <div>
               <span className="hero-title">
               Build Your <br /> Awesome <br /> Platform
               </span>
               <p>Enver studio is a digital studio that offers several services <br /> such as UI/UX Design to developers, we will provide the best <br /> service for those of you who use our services.</p>
               <button>Our Services <AiOutlineArrowRight className="arrow"></AiOutlineArrowRight> </button>
               </div>
               <div className="hero-image">
                   <span className="zigzag"></span>
                   <span className="circle"></span>
                   <span className="triangleOne"></span>                  
                   <span className="triangleTwo"></span>                  
                   <span className="plus"></span>                  
                   <img src={men} alt="" />
               </div>
            </div>
        </div>
    );
};

export default Hero;