import React from 'react';
import './Project.css';
import { useNavigate } from 'react-router-dom';

const Project = ({ image, title, id }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    setTimeout(() => {
      navigate(`/project/${id}`);
    }, 500);
  };

  return (
    <div className='gridItem' onClick={handleClick}>
      <img src={image} alt={title} />
      <div className='gridGradient'></div>
      <div className='gridTitle'>{title}</div>
    </div>
  );
};

export default Project;
