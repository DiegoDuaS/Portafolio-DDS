import { motion } from "framer-motion"
import './main.css'
import { ButtonRed, ButtonBlue, ButtonGreen } from "../components/mainpagebutton"
import Header from "../components/header"

function MainPage() {

    return (
      <>
        <motion.div className="home"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        > 
            <Header></Header>
            <ButtonRed></ButtonRed>
            <ButtonGreen></ButtonGreen>
            <ButtonBlue></ButtonBlue>
        </motion.div>
        
      </>
    )
  }
  
  export default MainPage