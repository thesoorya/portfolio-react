import React from "react";
import "./About.css";
import profile from '../../assets/profile.jpg'

const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <div className="profile">
          <img src={profile} alt="" />
        </div>
        <div className="profileDetails">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, illum? Voluptatem quaerat doloribus odit reiciendis obcaecati, tempora vel nostrum ullam beatae eos voluptates ad sed quibusdam error dolorum. Possimus, nulla?
        </div>
      </div>

      <div className="aboutWork">
        <div className="experience">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus quia amet itaque, magni alias ratione esse culpa aut inventore quae!</div>
        <div className="education">
          <div className="college">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eum?</div>
          <div className="school">
            <div className="ten">Lorem ipsum dolor sit amet.</div>
            <div className="twelve">Lorem ipsum dolor sit amet.</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
