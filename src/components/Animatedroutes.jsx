import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import ProjectDetails from '../pages/ProjectDetails/ProjectDetails'
import { AnimatePresence } from 'framer-motion'

const Animatedroutes = () => {

    const location = useLocation()
    console.log(location);
    

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/project/:title' element={<ProjectDetails />} />
            </Routes>
        </AnimatePresence>
    )
}

export default Animatedroutes