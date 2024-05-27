import { motion } from "framer-motion"
import './buttons.css'
import { useNavigate } from 'react-router-dom';

export const ButtonSkyBlue = () => (
  <motion.button className="sky-blue"
    whileHover={{ scale: 1.9 }}
    whileTap={{ scale: 0.9 }}
  >
    TECHNOLOGIES
  </motion.button>
)

export const ButtonBlue = () => (
  <motion.button className="blue"
    whileHover={{ scale: 1.9 }}
    whileTap={{ scale: 0.9 }}
  >
    EXPERIENCE
  </motion.button>
)

export const ButtonAqua = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/aboutme'); // Cambia '/aqua' por la ruta que desees
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

export const ButtonPurlpe = () => (
  <motion.button className="purple"
    whileHover={{ scale: 1.9 }}
    whileTap={{ scale: 0.9 }}
  >
    PROYECTS
  </motion.button> 

)

