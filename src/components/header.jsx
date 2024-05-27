import './header.css'
import spotifyIcon from '../images/spotify.png';
import linkedinIcon from '../images/linkedin.png';
import githubIcon from '../images/github.png';

function Header({message, type}) {

    return (
        <header className="fixed-header">
            <h2 className='introduction'>{message}</h2>
            <div className='link-container'>
                <a className='links' href="https://open.spotify.com/user/diego.slowing?si=fd01cd00641449a0" target="_blank">
                    <img src={spotifyIcon} alt="Spotify" className="link-icon"/>
                </a>
                <a className='links' href="https://www.linkedin.com/in/diego-duarte-slowing-080b1b22b/" target="_blank">
                    <img src={linkedinIcon} alt="LinkedIn" className="link-icon"/>
                </a>
                <a className='links' href="https://github.com/DiegoDuaS" target="_blank">
                    <img src={githubIcon}alt="GitHub" className="link-icon"/>
                </a>
            </div>
        </header>
    );
}

export default Header