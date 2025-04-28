import './technology.css'
import CSS from '../icons/css.png'
import Docker from '../icons/docker.png'
import Express from '../icons/express.png'
import Firebase from '../icons/firebase.png'
import Github from '../icons/github.png'
import Git from '../icons/gitl.png'
import HTML from '../icons/html.png'
import Java from '../icons/java.png'
import JetpackCompose from '../icons/jetpack.png'
import JS from '../icons/js.png'
import MySQL from '../icons/mysql.png'
import Next from '../icons/next.png'
import Node from '../icons/node.png'
import Postgres from '../icons/postgres.png'
import Python from '../icons/python.png'
import ReactLogo from '../icons/react.png'
import Vercel from '../icons/vercel.png'
import ViteLogo from '../icons/vite.png'
import AWS from '../icons/aws.png'
import CSharp from '../icons/c++.png'
import Mongo from '../icons/mongo.png'
import N4J from '../icons/n4j.png'

const getIconsByCategory = (category) => {
    const iconMap = {
      Frontend: [
        { src: HTML, alt: 'HTML' },
        { src: CSS, alt: 'CSS' },
        { src: JS, alt: 'JavaScript' },
        { src: ReactLogo, alt: 'React' },
        { src: Next, alt: 'Next.js' },
        { src: ViteLogo, alt: 'Vite' },
        { src: JetpackCompose, alt: 'Jetpack Compose' },
      ],
      Backend: [
        { src: Node, alt: 'Node.js' },
        { src: Express, alt: 'Express' },
        { src: Java, alt: 'Java' },
        { src: Python, alt: 'Python' },
        { src: CSharp, alt: 'C++' },
      ],
      DataBase: [
        { src: MySQL, alt: 'MySQL' },
        { src: Postgres, alt: 'PostgreSQL' },
        { src: Firebase, alt: 'Firebase' },
        { src: Mongo, alt: 'MongoDB' },
        { src: N4J, alt: 'Neo4J' },
      ],
      Tools: [
        { src: Docker, alt: 'Docker' },
        { src: Git, alt: 'Git' },
        { src: Github, alt: 'Github' },
        { src: Vercel, alt: 'Vercel' },
        { src: AWS, alt: 'AWS' },
        
      ],
    };
  
    return iconMap[category] || [];
  };


export const TechCard = ({Title}) => {

    const icons = getIconsByCategory(Title);


    return (
      <div className='tech-card'>
        <h2> {Title}</h2>
        <div className='icons-container'>
        {icons.map((icon, index) => (
          <div key={index} className='icon-wrapper'>
            <img src={icon.src} alt={icon.alt} className='tech-icon' />
            <p className='tech-name'>{icon.alt}</p>
          </div>
        ))}
        </div>
      </div>
    )
}