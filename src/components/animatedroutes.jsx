import React from "react";
import { Route, BrowserRouter as Router, Routes, useLocation} from 'react-router-dom'
import MainPage from "../pages/mainp";
import StartPage from "../pages/start";
import AboutMePage from "../pages/aboutme";
import { AnimatePresence } from "framer-motion";
// import {AnimatePresence} from 'framer-motion/dist/framer-motion'

function AnimatedRoutes(){
    const location = useLocation()
    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<StartPage/>}></Route>
                <Route path='/home' element={<MainPage/>}></Route>
                <Route path='/aboutme' element={<AboutMePage/>}></Route>
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes