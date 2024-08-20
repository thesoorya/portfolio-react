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
    return {};
  };

  return (
    <div className='footer' style={getFooterStyle()}>
      &copy; Copyright Soorya Narayanan. All Rights Reserved
    </div>
  );
};

export default Footer;