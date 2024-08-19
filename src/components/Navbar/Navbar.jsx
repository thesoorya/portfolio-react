import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('portfolio');

    useEffect(() => {
        const savedLink = localStorage.getItem('activeLink');
        if (savedLink) {
            setActiveLink(savedLink);
        }
    }, []);

    const handleLinkClick = (link) => {
        setActiveLink(link);
        localStorage.setItem('activeLink', link); 
    };

    const getNavBarStyle = () => {
        if (activeLink === 'portfolio') {
            return { backgroundColor: '#fbfbfb' };
        } else if (activeLink === 'about') {
            return { backgroundColor: '#1d1814', color: '#fbfbfb' };
        } else {
            return { backgroundColor: '#191815' };
        }
    };

    return (
        <div>
            <nav className="nav" style={getNavBarStyle()}>
                <div className="brand" id="brand">
                    <Link to='/' onClick={() => handleLinkClick('portfolio')}><p>Soorya Narayanan</p></Link>
                </div>
                <ul className="navigators">
                    <li className="nav-items">
                        <Link
                            to="/"
                            className={`nav-link ${activeLink === 'portfolio' ? 'active' : ''}`}
                            onClick={() => handleLinkClick('portfolio')}
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li className="nav-items">
                        <Link
                            to="/about"
                            className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
                            onClick={() => handleLinkClick('about')}
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav-items">
                        <a
                            href="https://github.com/your-username"
                            className="nav-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </li>
                    <li className="nav-items">
                        <a
                            href="https://linkedin.com/in/your-profile"
                            className="nav-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
