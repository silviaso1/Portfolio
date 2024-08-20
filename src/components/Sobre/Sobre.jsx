// Sobre.js
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
            <h1>Quem é  <span>Silvia?</span></h1>
          </div>
          <div id='quem-sou'>
            <p>Estudante de Análise e desenvolvimento de sistemas na FAETERJ-RIO, atualmente no 4° semestre, com um forte interesse na área de Desenvolvimento Web. Estou em busca de uma oportunidade de estágio onde eu possa aplicar meus conhecimentos teóricos em um ambiente prático, colaborar com profissionais experientes e continuar meu desenvolvimento</p>
          </div>
        </section>
      </div>
    </>
  );
}
