import { motion } from "framer-motion"
import './main.css'
import { ButtonBlue, ButtonPurlpe, ButtonAqua, ButtonSkyBlue } from "../components/buttons"
import Header from "../components/header"

function MainPage() {

    return (
      <>
        <motion.div className="home"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        > 
           
            <div className="button-holder">
              <ButtonAqua></ButtonAqua>
              <ButtonPurlpe></ButtonPurlpe>
              <ButtonBlue></ButtonBlue>
              <ButtonSkyBlue></ButtonSkyBlue>
            </div>
            <Header message={'Hello! Im Diego Duarte Slowing'} type={'type1'}></Header>
        </motion.div>
        
      </>
    )
  }
  
  export default MainPage