import { motion } from "framer-motion"

function MainPage() {

    return (
      <>
        <motion.div className="home"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}

        > 
            <p> Main Page</p>
        </motion.div>
        
      </>
    )
  }
  
  export default MainPage