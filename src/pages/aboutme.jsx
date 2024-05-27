import { motion } from "framer-motion"
import './main.css'
import Header from "../components/header"
import Photo from '../images/mecropped.png';
import { ButtonBack } from "../components/mainpagebutton";

function AboutMePage() {

    return (
      <>
        <motion.div className="home"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        > 
            <Header message={'About Me'} type={'type2'}></Header>
            <div className="main-info">
              <img src={Photo} className="me-photo"></img>
              <div className="aboutme">
                <p className="metext">Hello! I'm Diego Duarte Slowing, a 20-year-old developer from Guatemala currently studying at Universidad del Valle de Guatemala (UVG). I am halfway through my third year pursuing a Bachelor's degree in Computer Science and Information Technology. Besides my studies, I have honed valuable skills in customer service.  I am a natural leader, very social, and a quick learner so im sure i'll be a great adition to your team! </p>
                <p className="metext">In my portfolio, I am excited to showcase some of the projects I am most proud of, and also a glimpse of my personality. You can find links to my Spotify, LinkedIn, and GitHub profiles up top.</p>
              </div>
            </div>
        </motion.div>
        
      </>
    )
  }
  
  export default AboutMePage