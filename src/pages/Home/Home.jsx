import React from 'react'
import { projects } from '../../assets/data'
import Project from '../../components/Project/Project'
import './Home.css'

const Home = () => {
    return (
        <div className="container">
            {projects.map((project, i) => (
                <Project image={project.image} title={project.title} id={project.id} key={i} />
            ))}
        </div>
    )
}

export default Home
