import React, { useContext } from 'react';
import './ProjectDetails.css';
import { useParams } from 'react-router-dom';
import { ContextProvider } from '../../components/Context/StoreContext';

const ProjectDetails = () => {
  const { projects } = useContext(ContextProvider);
  const { title } = useParams();

  const formattedTitle = title.replace(/-/g, ' ');

  const project = projects.find(project => project.title === formattedTitle);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className='project'>
      {!project.github && project.previewImage && (
        <div className="projectImageContainer">
          <img src={project.previewImage} alt={project.title} />
        </div>
      )}
      <div className="projectDetails">
        <div className='projectDetail'>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
        <div className='projectLinks'>
          <div>
            <a href={project.link}>
              <p><u>{project.github ? 'View on GitHub' : 'Live Demo'}</u></p>
            </a>
          </div>
          <p>Built By: <small>{project.builtBy}</small></p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
