import './inicio.css';
import Foto from '../imgs/foto5.jpeg';
import { useState, useEffect } from 'react';

function TypingEffect() {
    const phrases = ["Desenvolvedora Front End."];
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
                setSpeed(150); // mais rápido ao apagar
                if (newDisplayText === '') {
                    setIsDeleting(false);
                    setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
                }
            } else {
                setSpeed(190); // mais lento ao digitar
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

export function Inicio() {
    return (
        <>
            <div className='Inicio'>
                <div id='text'>
                    <img src={Foto} alt="eu" id='me'/>
                    <h4>Hello, Eu sou a Silvia! :) <TypingEffect /></h4>
                </div>
                <div className='Buttons'>
                    <a href="#sobre"><button className='botao'>Sobre Mim</button></a>
                    <a href=""><button className='botao'>Meu currículo</button></a>
                </div>
            </div>
        </>
    );
}
