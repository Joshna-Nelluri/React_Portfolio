import React from 'react';
import HeroImage from '../assets/hero-image.png';

const Hero = () => {
    return (
        <div>
            <div className='hero-section'>
                <img src={HeroImage} alt="" className='hero-image' />
                <h1 className='hero-title'>
                    I'm {" "}
                    <span className='name'>Joshna Nelluri</span>
                    , Full-Stack Developer
                </h1>
                <p className='hero-description'>
                    I specialize in building modern and responsive web applications.
                </p>
                <div className='hero-buttons'>
                    <button className='btn-connect'>Connect With Me</button>
                    <button className='btn-resume'>Resume</button>
                </div>
            </div>
        </div>
    )
}

export default Hero;
