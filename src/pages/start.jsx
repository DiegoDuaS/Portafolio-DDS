import React, { useState, useEffect } from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import { useNavigate } from 'react-router-dom';
import './start.css'


function StartPage() {
    const navigate = useNavigate()
    const [showContinue, setShowContinue] = useState(false);
    const [welcometxt, setWelcomeTxt] = useTypewriter({
        words: ['Welcome to my portfolio', 'Want to learn more about me?'],
        typeSpeed: 100,
        delaySpeed: 1000,
        loop: 1,
        onLoopDone: () => {
            setTimeout(() => {
            setShowContinue(true);
            }, 1000);
        }
    });


    return (
        <div>
            <h1>
                {welcometxt}
            </h1>
            {showContinue && (
                <button className='start-button' onClick={()=>navigate('/home')}>START</button>
            )}
        </div>
    );
}

export default StartPage;