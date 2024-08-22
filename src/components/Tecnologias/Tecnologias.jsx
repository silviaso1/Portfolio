import React, { useRef, useState, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaPhp, FaVuejs, FaReact,FaBootstrap, FaFigma, FaGithub,FaJava, FaPython, FaSass  } from 'react-icons/fa';
import { SiMysql, SiXampp  } from "react-icons/si";
import './tecnologias.css';

export function Tecnologias() {
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
    <div ref={ref} className={`tecnologias-container ${isVisible ? 'fade-in' : ''}`}>
      <div className="tecnologia-card">
        <h3>Tools</h3>
        <p>Ferramentas e Linguagens usadas no desenvolvimento.</p>
        <div className="icon-grid">
        <FaHtml5 size={50} color="white" />
            <FaCss3Alt size={50} color="white" />
            <FaSass size={50} color='white'/>
            <FaBootstrap size={50} color='white' />
            <FaJsSquare size={50} color="white" />
            <FaPhp size={50} color='white'/>
            <FaPython size={50} color='white'/>
            <FaJava size={50} color='white'/>
        </div>
      </div>
      
      <div className="tecnologia-card">
        <h3>Frameworks</h3>
        <p>Frameworks adotado em minhas aplicações.</p>
        <div className="icon-grid">
          <FaVuejs size={50} color="white" className='icones' />
          <FaReact size={50} color="white" className='icones' />
        </div>
      </div>

      <div className="tecnologia-card">
        <h3>Outras Técnologias</h3>
        <p>Instrumentos empregados cotidianamente em aplicações.</p>
        <div className="icon-grid">
          <SiMysql size={50} color='white'/>
          <SiXampp size={50} color='white'/>
          <FaFigma size={50} color="white" className='icones' />
          <FaGithub size={50} color="white" className='icones' />
        </div>
      </div>
    </div>
  );
}
