import './experience.css'
import { motion } from "framer-motion"
import React, { useState, useEffect } from 'react';

export const ExpCard = ({Job, Time, Description}) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        if(isClicked){
            setIsClicked(false)
        }
        else{
            setIsClicked(true) 
        }
    }

    return (
      <motion.div 
        className="experience-card"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
      >
        <h3>{Job}</h3>
        <h4>{Time}</h4>
        {isClicked && <p className='jobdes'>{Description}</p>} 
      </motion.div>
    )
  }