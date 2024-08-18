import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/project/:id' element={<ProjectDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
