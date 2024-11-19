import React from 'react'

const Navbar = () => {
    return (

        <nav>
            <div className='container'>
                <div className='brand'>
                    Joshna
                </div>
                <div className='nav-links'>
                    <a href='#home'>Home</a>
                    <a href='#about'>About Me</a>
                    <a href='#services'>Services</a>
                    <a href='#projects'>Projects</a>
                    <a href='#contact'>Contact</a>
                </div>
                <button className='connect-button'>Connect me</button>

                <a href="#" class="menu-bar"><i class="fa fa-bars"></i></a>

                <div className='mobile'>
                    <div className='nav'>
                        <a href='#home'>Home</a>
                        <a href='#about'>About Me</a>
                        <a href='#services'>Services</a>
                        <a href='#projects'>Projects</a>
                        <a href='#contact'>Contact</a>
                    </div>
                    <button className='connect-btn'>Connect me</button>

                </div>
            </div>
        </nav>

    )
}

export default Navbar;
