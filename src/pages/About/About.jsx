import React, { useContext } from "react";
import { ContextProvider } from "../../components/Context/StoreContext";
import "./About.css";
import Skills from "../../components/Skills/Skills";

const About = () => {
  const { profile } = useContext(ContextProvider);

  return (
    <div className="about">
      <div className="aboutContainer">
        <div className="profile">
          <img src={profile} alt="" />
        </div>
        <div className="aboutProfile">
          <p>
            Hey! I’m Soorya Narayanan, a passionate Full Stack Developer from
            Coimbatore, India. With a bachelor's degree in Computer Science, I have honed my skills
            in web development through a rigorous Full Stack Web Development
            program and hands-on projects.
          </p>
          <br />
          <h3>My Journey</h3>
          <p>
            My journey into web development began with a curiosity about how
            websites are built and function. This curiosity turned into a
            passion as I delved deeper into both frontend and backend
            technologies.{" "}
          </p>
          <br />
          <div>
            <h3>What I Do</h3>
            <ul>
              <li>
                <span>Frontend Development</span>: Building intuitive and
                user-friendly interfaces with React.js and JavaScript.
              </li>
              <li>
                <span>Backend Development</span>: Developing robust server-side
                logic with Node.js and Express.js, ensuring efficient data
                management and secure authentication.
              </li>
            </ul>
          </div>
          <br />
          <div>
            <h3>Looking Forward</h3>
            <p>
              I’m always eager to take on new challenges and collaborate on
              innovative projects. I approach each task with enthusiasm and
              dedication.
            </p>
          </div>
          <br />
          <div style={{fontSize: '18px'}}>
            <u>contact: </u><u><a href="mailto:thesooryanarayanan@gmail.com">thesooryanarayanan@gmail.com</a></u>
          </div>
        </div>
      </div>

      <div className="bento">
        <div className="experience">
          <div>
            <h1>Frontend Developer at CodeBoosters</h1>
            <p>
              Revamped the frontend development for the organization by
              leveraging advanced HTML, CSS, and JavaScript techniques. This
              effort resulted in a notable reduction in user bounce rates and a
              significant increase in average session duration over a span of
              two and a half months.
            </p>
            <br />
            <p>
              In my role, I took initiative in leading UI design projects and
              worked collaboratively across departments. This proactive approach
              contributed to a significant improvement in user engagement and a
              substantial enhancement in conversion rates.
            </p>
          </div>
        </div>
        <div className="education">
          <div className="school">
            <div className="twelveth">
              <div>
                <h1>HSC</h1>
                <p>
                  Annai Velankanni Matric Higher Secondary School, Coimbatore
                </p>
              </div>
            </div>
            <div className="tenth">
              <div>
                <h1>SSLC</h1>
                <p>
                  Annai Velankanni Matric Higher Secondary School, Coimbatore
                </p>
              </div>
            </div>
          </div>
          <div className="expericenceTitle">
            <h1>Expericence</h1>
          </div>
          <div className="college">
            <div className="collegeName">
              <h1>COLLEGE</h1>
              <h3>BSc Computer Science</h3>
              <p> Sri Ramakrishna College of Arts and Science, Coimbatore </p>
            </div>
            <div className="batch">
              <div>
                <h1>Batch</h1>
                <h2>2020 - 2023</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="achievements">
          <div className="fswd">
            <div>
              <h1>Full Stack Web Development</h1>
              <p>
                Completed a comprehensive Full Stack Web Development program
                specializing in the MERN stack (MongoDB, Express.js, React.js,
                Node.js) at Edureka! Learning Center. Awarded the Certificate of
                Excellence for successfully mastering the full stack
                technologies, which included:
              </p>
              <ul>
                <li>
                  <span>Frontend Development</span>: Building dynamic and
                  responsive user interfaces with React.js, JavaScript, HTML,
                  CSS.
                </li>
                <li>
                  <span>Backend Development</span>: Designing and implementing
                  scalable server-side applications with Node.js and Express.js.
                </li>
              </ul>
            </div>
          </div>
          <div className="internship">
            <div>
              <h1>Web Development Internship</h1>
              <p>
                Completed an internship at Edureka! Learning Center from March
                to April 2024, during which I earned a certificate for my
                successful contribution and completion of the program. This
                internship provided hands-on experience in web development,
                allowing me to apply and enhance my skills in building and
                deploying web applications.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="skills"><Skills /></div>
    </div>
  );
};

export default About;
