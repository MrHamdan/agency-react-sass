import React from 'react';
import meeting from '../Images/meeting.png';
import '../Styles/Choice.scss';
import { MdPlayArrow } from "react-icons/md";

const Choice = () => {
    return (
        <div className="container">
            <div className='choice'>
            <div>
                <span>
                    Why Enver Is The <br /> Best Choice?
                </span>
                <p>
                    Watch this one minute video so you understand why you should <br /> use our services!
                </p>
            </div>
            <img src={meeting} alt="" />
            <MdPlayArrow className="playIcon" />
        </div>
        </div>
    );
};

export default Choice;