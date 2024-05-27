import { motion } from "framer-motion"
import './main.css'
import Header from "../components/header"

function ProyectsPage() {

    return (
      <>
        <motion.div className="home"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        > 
            <Header message={'Proyects'} type={'type3'}></Header>
        </motion.div>
        
      </>
    )
  }
  
  export default ProyectsPage