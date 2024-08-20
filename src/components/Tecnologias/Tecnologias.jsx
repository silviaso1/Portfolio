import React, { useRef, useState, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaNode, FaPhp, FaVuejs, FaReact, FaFigma, FaGithub, FaPython } from 'react-icons/fa';
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
        <h3>Tool</h3>
        <p>Ferramentas usadas para aplicações web.</p>
        <div className="icon-grid">
          <FaHtml5 size={50} color="white" className='icones' />
          <FaCss3Alt size={50} color="white" className='icones' />
          <FaJsSquare size={50} color="white" className='icones' />
          <FaNode size={50} color="white" className='icones' />
          <FaPhp size={50} color="white" className='icones' />
        </div>
      </div>
      
      <div className="tecnologia-card">
        <h3>Framework</h3>
        <p>Framework adotado em minhas aplicações.</p>
        <div className="icon-grid">
          <FaVuejs size={50} color="white" className='icones' />
          <FaReact size={50} color="white" className='icones' />
        </div>
      </div>

      <div className="tecnologia-card">
        <h3>Outras Técnologias</h3>
        <p>Instrumentos empregados cotidianamente em aplicações.</p>
        <div className="icon-grid">
          <FaFigma size={50} color="white" className='icones' />
          <FaGithub size={50} color="white" className='icones' />
          <FaPython size={50} color="white" className='icones' />
        </div>
      </div>
    </div>
  );
}
