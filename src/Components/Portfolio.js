import React from 'react';
import '../Styles/Portfolio.scss';
import portfolioOne from '../Images/portfolio-one.png';
import portfolioTwo from '../Images/portfolio-two.png';
import portfolioThree from '../Images/portfolio-three.png';

const Portfolio = () => {

    

    return (
        <div className="container">
            <div className="portfolio-section">
            <span className="plus"></span> 
            <span className="circle"></span>
            <div>
            <span>Our Awesome Portfolio</span>
            </div>
            <div className="portfolio-images">
                <img className="imageOne" src={portfolioOne} alt="" />
                <img  className="imageTwo" src={portfolioTwo} alt="" />
                <img  className="imageThree" src={portfolioThree} alt="" />
            </div>
            </div>
        </div>
    );
};

export default Portfolio;