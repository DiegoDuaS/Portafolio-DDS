import { motion } from "framer-motion"
import './main.css'
import Header from "../components/header"
import { ExpCard } from "../components/experiencecards"

function ExperiencePage() {

    return (
      <>
        <motion.div className="home"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        > 
            
            <div className="card-holder">
                <ExpCard Job={'Customer Service Representative - Divino Seas'} Time={'Dec 2022 - Feb 2024'} Description={'Provided exceptional customer service by managing and responding to customer inquiries and complaints via email in English. I Successfully maintained a high customer satisfaction rate through efficient email communication.'}></ExpCard>
                <ExpCard Job={'Return Center Manager - Divino Seas'} Time={'Feb 2023 - Feb 2024'} Description={'I was responsible for managing and responding to all inquiries related to product returns, ensuring compliance with company policies and requirements. I developed and implemented a control system to efficiently handle the influx of returned orders, coordinating with the customer service team to provide timely information to customers.'}></ExpCard>
            </div>
            <Header message={'Experience'} type={'type4'}></Header>
            
        </motion.div>
        
      </>
    )
  }
  
  export default ExperiencePage