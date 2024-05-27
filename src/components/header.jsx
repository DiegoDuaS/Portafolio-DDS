import './header.css'
import spotifyIcon from '../images/spotify.png';
import linkedinIcon from '../images/linkedin.png';
import githubIcon from '../images/github.png';
import { ButtonBack } from './mainpagebutton';

function Header({message, type}) {

    let headerClass = ''
    let aClass = ''

    switch (type) {
        case 'type1':
            headerClass = 'header-type1';
            aClass = 'a-type1';
            break;
        case 'type2':
            headerClass = 'header-type2';
            aClass = 'a-type2';
            break;
        case 'type3':
            headerClass = 'header-type3';
            aClass = 'a-type3';
            break;
        case 'type4':
            headerClass = 'header-type4';
            aClass = 'a-type4';
            break;
        case 'type5':
            headerClass = 'header-type5';
            aClass = 'a-type5';
            break;
    }

    return (
        <header className={`fixed-header ${headerClass}`}>
            {headerClass !== 'header-type1' && <ButtonBack />}
            <h2 className='introduction'>{message}</h2>
            <div className='link-container'>
                <a className={`links ${aClass}`} href="https://open.spotify.com/user/diego.slowing?si=fd01cd00641449a0" target="_blank">
                    <img src={spotifyIcon} alt="Spotify" className="link-icon"/>
                </a>
                <a className={`links ${aClass}`} href="https://www.linkedin.com/in/diego-duarte-slowing-080b1b22b/" target="_blank">
                    <img src={linkedinIcon} alt="LinkedIn" className="link-icon"/>
                </a>
                <a className={`links ${aClass}`} href="https://github.com/DiegoDuaS" target="_blank">
                    <img src={githubIcon}alt="GitHub" className="link-icon"/>
                </a>
            </div>
        </header>
    );
}

export default Header