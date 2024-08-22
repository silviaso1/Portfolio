import './inicio.css';
import Foto from '../imgs/foto5.jpeg';
import { useState, useEffect } from 'react';

function TypingEffect() {
    const phrases = ["Desenvolvedora de Software."];
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(100);

    useEffect(() => {
        const handleTyping = () => {
            const currentPhrase = phrases[index];
            const newDisplayText = isDeleting
                ? currentPhrase.substring(0, displayText.length - 1)
                : currentPhrase.substring(0, displayText.length + 1);

            setDisplayText(newDisplayText);

            if (isDeleting) {
                setSpeed(80); // mais rápido ao apagar
                if (newDisplayText === '') {
                    setIsDeleting(false);
                    setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
                }
            } else {
                setSpeed(100); // mais lento ao digitar
                if (newDisplayText === currentPhrase) {
                    setIsDeleting(true);
                }
            }
        };

        const timer = setTimeout(handleTyping, speed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, index, speed]);

    return (
        <span>{displayText}</span>
    );
}

function scrollToElement(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

export function Inicio() {
    return (
        <>
            <div className='Inicio'>
                <div id='text'>
                    <img src={Foto} alt="eu" id='me'/>
                    <div id='about-me'>
                        <h4>Hello, Eu sou a <span id='eu'>Silvia! :)</span></h4>
                        <h4><TypingEffect /></h4>
                        <p>Aqui você irá conhecer a mim e meus projetos!</p>
                    </div>
                </div>
                <div className='Buttons'>
                    <button className='botao' onClick={() => scrollToElement('sobre')}>Sobre Mim</button>
                    <a href=""><button className='botao'>Meu currículo</button></a>
                </div>
            </div>
        </>
    );
}
