import { motion } from "framer-motion"
import './buttons.css'

export const ButtonRed = () => (
  <motion.button className="red"
    whileHover={{ scale: 1.9 }}
    whileTap={{ scale: 0.9 }}
  />
)

export const ButtonBlue = () => (
  <motion.button className="blue"
    whileHover={{ scale: 1.9 }}
    whileTap={{ scale: 0.9 }}
  />
)

export const ButtonGreen = () => (
  <motion.button className="green"
    whileHover={{ scale: 1.9 }}
    whileTap={{ scale: 0.9 }}
  />
)

