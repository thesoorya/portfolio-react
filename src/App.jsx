import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Animatedroutes from "./components/Animatedroutes";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Animatedroutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
