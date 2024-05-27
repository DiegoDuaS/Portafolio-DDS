import { motion } from "framer-motion"
import './buttons.css'
import { useNavigate } from 'react-router-dom';
import { IoChevronBack } from "react-icons/io5";

export const ButtonSkyBlue = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/technologies'); 
  }

  return (
    <motion.button 
      className="sky-blue"
      whileHover={{ scale: 1.9 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
    >
      TECHNOLOGIES
    </motion.button>
  )
}

export const ButtonBlue = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/experience'); 
  }

  return (
    <motion.button className="blue"
      whileHover={{ scale: 1.9 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
    >
      EXPERIENCE
    </motion.button>
  )
}

export const ButtonAqua = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/aboutme'); 
  }

  return (
    <motion.button 
      className="button aqua"
      whileHover={{ scale: 1.9 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
    >
      ABOUT ME
    </motion.button>
  )
}

export const ButtonPurlpe = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/proyects'); 
  }

  return (
    <motion.button 
      className="purple"
      whileHover={{ scale: 1.9 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
    >
      PROYECTS
    </motion.button>
  )
}

export const ButtonBack = () => {
  const navigate = useNavigate();
  let iconStyles = { color: "black", fontSize: "1.3em" };

  const handleClick = () => {
    navigate('/home'); 
  }

  return (
    <motion.button 
      className="backbutton"
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
    >
      <IoChevronBack style={iconStyles}/>
    </motion.button>
  )
}

