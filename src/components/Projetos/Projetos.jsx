
import React, { useRef, useState, useEffect } from 'react';
import { MdComputer } from "react-icons/md";
import './projetos.css';
import Projeto1 from '../imgs/projeto1.png';
import Projeto2 from '../imgs/projeto2.png';
import Projeto3 from '../imgs/projeto3.png';
import Projeto4 from '../imgs/projeto4.png';

export function Projetos() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Desconecta o observador após a seção se tornar visível
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div className={`portfolio ${isVisible ? 'fade-in' : ''}`} ref={ref} id='projetos'>
            <MdComputer size={40} color='rgb(102, 19, 255)'/>
            <h1>PROJETOS</h1>
            <h3>Alguns dos meus principais projetos desenvolvidos</h3>
            <div className="cards">
                <div className="card">
                    <img src={Projeto1} alt="Projeto 1" />
                    <div className="overlay">
                        <p>Trabalho para Av2 de CAW. Trata-se de desenvolver 3 páginas sobre qualquer assunto e o tema escolhido foi uma padaria, fazendo referência à série Breaking Bad (Baking Breads)</p>
                        <div className='but-project'>
                        <a href="https://github.com/silviaso1/Padaria---Baking-Breads"><button>Repositório</button></a>
                        <a href="https://silviaso1.github.io/Padaria---Baking-Breads/"><button>Site</button></a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={Projeto2} alt="Projeto 2" />
                    <div className="overlay">
                        <p>Mini Game como parte do curso da ONE, em colaboração com a Alura. O objetivo do jogo é descobrir o número escondido, que muda a cada acerto e desafia o jogador a utilizar lógica e estratégia para identificar o número correto.</p>
                        <div className='but-project'>
                        <a href="https://github.com/silviaso1/Adivinhe-o-numero-jogo"><button>Repositório</button></a>
                        <a href="https://silviaso1.github.io/Adivinhe-o-numero-jogo/"><button>Game</button></a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={Projeto3} alt="Projeto 3" />
                    <div className="overlay">
                        <p> Challenge Encriptador de Texto, do curso da ONE, consiste em uma aplicação que criptografa textos fornecidos pelo usuário. O desafio inclui funcionalidades para visualizar o texto criptografado e copiá-lo facilmente, assim como descriptografá-lo se necessário</p>
                        <div className='but-project'>
                        <a href="https://github.com/silviaso1/decodificador-de-texto"><button>Repositório</button></a>
                        <a href="https://silviaso1.github.io/decodificador-de-texto/"><button>Encriptador</button></a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={Projeto4} alt="Projeto 4" />
                    <div className="overlay">
                        <p>Uma instituição de animais que fornece adoção, banho e tosa, e atendimento veterinário, além de artigos para saber mais a respeito de bichinhos!</p>
                        <div className='but-project'>
                        <a href="https://github.com/silviaso1/Patas-e-Bigodes"><button>Repositório</button></a>
                        <a href="https://silviaso1.github.io/Patas-e-Bigodes/"><button>Site</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
