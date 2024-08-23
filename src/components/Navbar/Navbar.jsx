import React, { useState, useEffect } from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    const location = useLocation()

    const getNavBarStyle = () => {
        if (location.pathname === '/') {
            return { backgroundColor: '#fbfbfb', color: '#191815' };
        }
        else if (location.pathname === '/about') {
            return { backgroundColor: '#1d1814', color: '#fdd596', fontFamily: '"Archivo", sans-serif' };
        }
        else {
            return { backgroundColor: '#fbfbfb', color: '#191815' };
        }
    };

    return (
        <div>
            <nav className="nav__nav" style={getNavBarStyle()}>
                <div className="brand__logo" id="brand">
                    <Link to='/' onClick={() => handleLinkClick('portfolio')}><p>Soorya Narayanan</p></Link>
                </div>
                <ul className="navigators">
                    <li className="nav__items">
                        <Link
                            to="/"
                            className="nav__link"
                            onClick={() => handleLinkClick('portfolio')}
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li className="nav__items">
                        <Link
                            to="/about"
                            className="nav__link"
                            onClick={() => handleLinkClick('about')}
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav__items">
                        <a
                            href="https://github.com/thesoorya"
                            className="nav__link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </li>
                    <li className="nav__items">
                        <a
                            href="https://www.linkedin.com/in/thesooryanarayanan/"
                            className="nav__link"
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
