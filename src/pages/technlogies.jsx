import { motion } from "framer-motion"; // Importa el componente motion de Framer Motion
import './main.css'; // Importa el archivo de estilos CSS
import Header from "../components/header"; // Importa el componente Header desde la ruta especificada

function TechnologiesPage() {
    // Función del componente TechnologiesPage
    return (
      <>
        <motion.div className="home"
            initial={{opacity: 0}} // Configura la animación inicial de opacidad
            animate={{opacity: 1}} // Configura la animación de opacidad al estado final
            exit={{opacity: 0}} // Configura la animación de salida de opacidad
        > 
            <Header message={'Technologies'} type={'type5'}></Header> {/* Renderiza el componente Header con un mensaje y un tipo específico */}
        </motion.div>
        
      </>
    );
}
  
export default TechnologiesPage; // Exporta el componente TechnologiesPage para que pueda ser utilizado en otros archivos
