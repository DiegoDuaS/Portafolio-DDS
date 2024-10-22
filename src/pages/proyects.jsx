import { motion } from "framer-motion"
import './main.css'
import Header from "../components/header"
import ImageCarousel from "../components/carousel"
import Diorama from '../images/minecraft.png'
import Steam from '../images/steam.png'
import Chefcito from '../images/chefcito.png'
import Whatsapp from '../images/whatsapp.png'
import ElFogon from '../images/elfogon.png'


function ProyectsPage() {

  const slides = [
    { image: ElFogon, title: 'El Fogon Dorado', description: `The "El Fogón Dorado" project is a restaurant management application developed using React and Express.js. It aims to streamline restaurant operations, enhance user experience, and provide efficient management tools for staff and customers.`, link: 'https://github.com/DiegoDuaS/RestaurantSystem' },
    { image: Diorama, title: 'Minecraft Diorama', description: `The "Minecraft Diorama" project is a visually stunning diorama themed around Minecraft, developed using Rust. It showcases advanced ray tracing techniques to create realistic lighting and shadows, immersing viewers in a beautifully crafted Minecraft-inspired environment.`, link: 'https://github.com/DiegoDuaS/MinecraftDiorama'},
    { image: Whatsapp, title: 'WhatsApp Pay', description: 'Conceptual design created in Figma for a fictional feature addition to WhatsApp that enables users to make payments directly through the app.', link: 'https://www.figma.com/proto/d5UgpGZCWLlFLLHouOfZv9/Whatsapp-pay?node-id=0-2&node-type=canvas&t=tmgZtx4binwcP7yp-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=0%3A2'},
    { image: Chefcito, title: 'Chefcito Recipe App', description: 'Chefcito Recipe App is a mobile application for Android, developed using JetPack Compose and Firebase. Its main functionality allows users to input the ingredients they have and suggests recipes that can be made with those ingredients.', link: 'https://appdistribution.firebase.dev/i/32b7682f01ad8929'},
    { image: Steam, title: 'Steam Redesign', description: 'A Figma-based design that reimagines the Steam platform with a focus on catering to mothers. This redesign prioritizes user-friendly navigation and simplified layouts, highlighting quick games and those with captivating stories, making it easier for moms to discover and enjoy engaging gaming experiences.', link: 'https://www.figma.com/proto/juhj2WIPVNwshxKYHXPGmz/MomSteam?node-id=1-4&node-type=canvas&t=nw4IrYGU01QD7M6w-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4' }
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