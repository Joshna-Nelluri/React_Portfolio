import React from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
    return (
        <div className='contact-section' id='contact'>
            <div className='container'>
                <h2 className='section-title'>
                    Contact Me
                </h2>
                <div className='contact-wrapper'>

                    <div className='contact-info'>
                        <h3 className='contact-heading'>Let's Talk</h3>
                        <p>I'm open to discuss Web Development projects.</p>
                        <div className='contact-item'>
                            <FaEnvelope className='contact-icon'></FaEnvelope>
                            <a href='mailto:youremail@example.com' className='contact-link'>
                                youremail@example.com
                            </a>
                        </div>

                        <div className='contact-item'>
                            <FaPhone className='contact-icon'></FaPhone>
                            <span>8743893033</span>
                        </div>

                        <div className='contact-item'>
                            <FaMapMarkedAlt className='contact-icon'></FaMapMarkedAlt>
                            <span>street, city, country</span>
                        </div>
                    </div>

                    <div className='contact-form'>
                        <form className='form'>
                            <div>
                                <label htmlFor='name' className='form-label-1'>Your Name</label>
                                <input type='text' className='form-input' placeholder="Enter Your Name" />
                            </div>

                            <div>
                                <label htmlFor='email' className='form-label'>Email</label>
                                <input type='text' className='form-input' placeholder="Enter yout Email" />
                            </div>

                            <div>
                                <label htmlFor='message' className='form-label'>Message</label>
                                <textarea type='text' className='form-input' rows="5" placeholder="Enter Your Message" />
                            </div>

                            <button className='form-submit-btn'>Send</button>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>

    )
}

export default Contact;
