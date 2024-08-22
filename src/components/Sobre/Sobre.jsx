import { FaGithub, FaLinkedin,  } from "react-icons/fa";
import { FaPersonDress } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import React, { useRef, useState, useEffect } from 'react';
import './sobre.css';
import curriculo from '../imgs/Curriculo.pdf';


export function Sobre() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Desconecta o observador após o item se tornar visível
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
    <>
      <div className={`Sobre ${isVisible ? 'fade-in' : ''}`} ref={ref} id='sobre'>
        <section id='exibindo'>
          <div className="title">
          <FaPersonDress size={40} color="rgb(200, 19, 255)"/>
            <h1>SOBRE <span>MIM</span></h1>
          </div>
          <div id='quem-sou'>
            <p>Olá! Eu sou a Silvia, tenho 18 anos e sou do Rio de Janeiro. Atualmente, estou estudando Análise e Desenvolvimento de Sistemas na FAETERJ-RIO, onde tenho a oportunidade de mergulhar profundamente no mundo da tecnologia e do desenvolvimento.</p>
            <p>Tenho trabalhado em projetos que envolvem a criação de interfaces intuitivas e a prototipagem de novas ideias, sempre com o objetivo de melhorar a experiência do usuário.Estou sempre em busca de novos desafios e oportunidades para aplicar minhas habilidades e continuar aprendendo.</p>
          </div>

          <div className='minhas-redes'>
            <div className='redes'>
              <a href="https://github.com/silviaso1"><FaGithub size={50} color="white" className="icone"/></a>
              </div>
            <div className='redes'>
              <a href="https://www.linkedin.com/in/silviaso1/"><FaLinkedin size={50} color="white" className="icone"/></a>
            </div>
            <div className='redes'>
              <a href="mailto:silviasoares423@gmail.com"><MdEmail size={50} color="white" className="icone"/></a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
