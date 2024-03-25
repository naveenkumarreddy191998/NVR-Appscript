import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faEnvelope, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';
const Header = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    return (
        <div className="container">
            <div className="left-section">
                <img src="left-image.png" alt="Left Image" />
                {isMobile && (
                    <div id="navIcon" >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </div>
                )}

            </div>
            <div className="center-section">
                <h2 className='logo_container'>Logo</h2>
                {!isMobile && (
                    <ul className="menu-list desktop-menu">
                        <li><a href="#">SHOP</a></li>
                        <li><a href="#">SKILLS</a></li>
                        <li><a href="#">STORIES</a></li>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">CONTACT US</a></li>
                    </ul>
                )}
            </div>
            <div className="right-section">
                <FontAwesomeIcon  className="icon_one"icon={faShoppingCart} />
                <FontAwesomeIcon className="icon_one"icon={faEnvelope} />
                <FontAwesomeIcon className="icon_one" icon={faSearch} />
            </div>
        </div>
    );
}

export default Header;
