import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('portfolio');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div>
            <nav className="nav">
                <div className="brand" id="brand">
                    <Link to='/'><p>Soorya Narayanan</p></Link>
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