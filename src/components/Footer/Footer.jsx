import React from 'react';
import './Footer.css';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  const getFooterStyle = () => {
    if (location.pathname === '/') {
      return { backgroundColor: '#fbfbfb', color: '#191815' };
    } else if (location.pathname === '/about') {
      return { backgroundColor: '#1d1814', color: '#fdd596' };
    }
    else {
      return { backgroundColor: '#fbfbfb', color: '#191815' };
    }
  };

  return (
    <div className='footer' style={getFooterStyle()}>
      <p>
        &copy; Copyright <u><a href="mailto:thesooryanarayanan@gmail.com">Soorya Narayanan</a></u>. All Rights Reserved
      </p>

    </div>
  );
};

export default Footer;