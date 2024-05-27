import { motion } from "framer-motion"
import './main.css'
import Header from "../components/header"

function TechnologiesPage() {

    return (
      <>
        <motion.div className="home"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        > 
            <Header message={'Technologies'} type={'type5'}></Header>
        </motion.div>
        
      </>
    )
  }
  
  export default TechnologiesPage