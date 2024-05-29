import { motion } from "framer-motion"
import './main.css'
import Header from "../components/header"
import ImageCarousel from "../components/carousel"
import Calc from '../images/calc.png'
import Chat from '../images/chat.png'
import Chefcito from '../images/chefcito.png'
import Dugtrio from '../images/dugtrio.png'
import Pixel from '../images/pixel.png'


function ProyectsPage() {

  const slides = [
    { image: Pixel, title: 'PixelPlaygrounds', description: `PixelPlaygrounds is a blog developed with React that aims to teach about different video games. It includes an admin section where various posts can be modified. Additionally, a RESTful API was developed using Express to support the blog's functionality.`, link: 'https://main--serene-babka-58fcc3.netlify.app' },
    { image: Calc, title: 'Next.js Calculator', description: `Next.js Calculator is a calculator developed with Next.js, offering basic calculator functionalities, including testing to ensure reliability and accuracy.`, link: 'https://main--calculadoratestdds.netlify.app'},
    { image: Dugtrio, title: 'CSS Dugtrio', description: 'CSS Dugtrio is an image of a Dugtrio character, drawn entirely with CSS. This project showcases the power of CSS in creating complex visual designs.', link: 'https://tiburoncin.lat/22075/Laboratorio4Web/'},
    { image: Chefcito, title: 'Chefcito Recipe App', description: 'Chefcito Recipe App is a mobile application for Android, developed using JetPack Compose and Firebase. Its main functionality allows users to input the ingredients they have and suggests recipes that can be made with those ingredients.', link: 'https://appdistribution.firebase.dev/i/32b7682f01ad8929'},
    { image: Chat, title: 'ChatRoom', description: 'ChatRoom is a chat application developed with JavaScript, enabling real-time communication between users.', link: 'https://tiburoncin.lat/22075/Lab5-JSONLY/' }
  ];

    return (
      <>
        <motion.div className="home"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        > 
            
            <div className="proyects">
              <ImageCarousel slides={slides} />
            </div>
            <Header message={'Projects'} type={'type3'}></Header>
        </motion.div>
      
      </>
    )
  }
  
  export default ProyectsPage