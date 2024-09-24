import React, { useContext } from 'react';
import Project from '../../components/Project/Project';
import './Home.css';
import { ContextProvider } from '../../components/Context/StoreContext';
import { motion } from 'framer-motion';;

const Home = () => {
    const { projects } = useContext(ContextProvider);

    return (
        <motion.div
            className="home"
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
            {projects.map((project, i) => (
                <Project image={project.image} title={project.title} id={project.id} key={i} />
            ))}
        </motion.div>
    );
};

export default Home;