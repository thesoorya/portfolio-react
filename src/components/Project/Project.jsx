import React from 'react';
import './Project.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Project = ({ image, title }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    const formattedTitle = title.replace(/\s+/g, '-');

    setTimeout(() => {
      navigate(`/project/${formattedTitle}`);
    }, 500);
  };

  return (
    <motion.div
      className="gridItem"
      onClick={handleClick}
    >
      <img src={image} alt={title} />
      <div className="gridGradient"></div>
      <div className="gridTitle">{title}</div>
    </motion.div>
  );
};

export default Project;
