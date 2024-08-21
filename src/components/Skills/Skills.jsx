import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaPython, FaGitAlt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiFramer, SiExpress, SiMongodb } from 'react-icons/si';
import { FaSquareGithub } from 'react-icons/fa6';

const Skills = () => {
    return (
        <div className="skills">
            <div className="skill"><FaHtml5 /></div>
            <div className="skill"><FaCss3Alt /></div>
            <div className="skill"><FaBootstrap /></div>
            <div className="skill"><IoLogoJavascript /></div>
            <div className="skill"><FaReact /></div>
            <div className="skill"><SiFramer /></div>
            <div className="skill"><FaNodeJs /></div>
            <div className="skill"><SiExpress /></div>
            <div className="skill"><SiMongodb /></div>
            <div className="skill"><FaPython /></div>
            <div className="skill"><FaGitAlt /></div>
            <div className="skill"><FaSquareGithub /></div>
        </div>
    );
};

export default Skills;
