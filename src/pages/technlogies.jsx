import { motion } from "framer-motion"
import './main.css'
import Header from "../components/header"
import { TechCard } from "../components/technologiescards";

function TechnologiesPage() {
    return (
      <>
        <motion.div className="home"
            initial={{opacity: 0}} 
            animate={{opacity: 1}} 
            exit={{opacity: 0}} 
        > 
            <div className="technologies">
              <div className="box-tech">
                <TechCard Title={'Frontend'}></TechCard>
                <TechCard Title={'Backend'}></TechCard>
                <TechCard Title={'DataBase'}></TechCard>
                <TechCard Title={'Tools'}></TechCard>
              </div>
            </div>
            <Header message={'Technologies'} type={'type5'}></Header> 
        </motion.div>
        
      </>
    );
}
  
export default TechnologiesPage;
