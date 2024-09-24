import React, { useContext } from "react";
import Project from "../../components/Project/Project";
import "./Home.css";
import { ContextProvider } from "../../components/Context/StoreContext";
import { motion } from "framer-motion";

const Home = () => {
  const { projects } = useContext(ContextProvider);

  return (
    <div className="home">
      {projects.map((project, i) => (
        <Project
          image={project.image}
          title={project.title}
          id={project.id}
          key={i}
        />
      ))}
    </div>
  );
};

export default Home;
