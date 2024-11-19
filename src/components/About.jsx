import React from 'react';
import AboutImage from '../assets/aboutme-image.png';

const About = () => {
    return (
        <div id='about'>
            <div className='container'>
                <h2 className='text-4xl font-bold text-center mb-12'>
                    About Me
                </h2>
                <div className='flex-wrapper'>
                    <img src={AboutImage} alt="" className='about-image' />
                    <div className='text-container'>
                        <p className='about-text'>
                            I am a passionate full-stack developer with a focus on building modern
                            and responsive web applications. With a stroong foundation in both frontend
                            and backend technologies, I strive to create efficient user experiences.
                        </p>
                        <div className='skill-bar'>
                            <div className='flex items-center'>
                                <label htmlFor='htmlandcss'>Java</label>
                                <div className='bar'>
                                    <div className='fill java'></div>
                                </div>
                            </div>
                        </div>

                        <div className='skill-bar'>
                            <div className='flex items-center'>
                                <label htmlFor='htmlandcss'>JavaScript</label>
                                <div className='bar'>
                                    <div className='fill javascript'></div>
                                </div>
                            </div>
                        </div>

                        <div className='skill-bar'>
                            <div className='flex items-center'>
                                <label htmlFor='htmlandcss'>HTML & CSS</label>
                                <div className='bar'>
                                    <div className='fill htmlcss'></div>
                                </div>
                            </div>
                        </div>

                        <div className='skill-bar'>
                            <div className='flex items-center'>
                                <label htmlFor='htmlandcss'>React JS</label>
                                <div className='bar'>
                                    <div className='fill reactjs'>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='skill-bar'>
                            <div className='flex items-center'>
                                <label htmlFor='htmlandcss'>Redux</label>
                                <div className='bar'>
                                    <div className='fill redux'>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='skill-bar'>
                            <div className='flex items-center'>
                                <label htmlFor='htmlandcss'>MySQL</label>
                                <div className='bar'>
                                    <div className='fill sql'>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='stats'>
                        <div>
                            <h3>
                                0+
                            </h3>
                            <p>Years Experience</p>
                        </div>
                        <div>
                            <h3>
                                5+
                            </h3>
                            <p>Projects Completed</p>
                        </div>
                        <div>
                            <h3>
                                1+
                            </h3>
                            <p>Happy Clients</p>
                        </div>
                    </div>

                    </div>
                    

                </div>
                
            </div>

        </div>
    )
}

export default About;
