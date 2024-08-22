import React, { useRef, useState, useEffect } from 'react';
import { FaHtml5,FaGraduationCap , FaCss3Alt, FaJsSquare, FaPhp, FaJava, FaPython, FaBootstrap } from 'react-icons/fa';
import { TbSql } from "react-icons/tb";
import { DiJqueryLogo } from "react-icons/di";
import './formacao.css';

export function Formacao() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
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
    <section className={`Formacao ${isVisible ? 'fade-in' : ''}`} ref={ref} id='formacao'>
      < FaGraduationCap size={40} color='#3cdd8e'/>
      <h2 className="experiencia-titulo">FORMAÇÃO</h2>

      <div className="timeline">
        <h3 className="timeline-titulo">Formação Acadêmica</h3>
        
        <div className="experiencia-item">
          <div className="experiencia-bolinha"></div>
          <div className="experiencia-detalhes faculdade">
            <h4>Análise e Desenvolvimento de Sistemas</h4>
            <p className="experiencia-empresa">FAETERJ-RIO</p>
            <p className="experiencia-periodo">2023-2025</p>
          </div>
          <div className="experiencia-descricao">
            <p>Atualmente, estou cursando Análise e Desenvolvimento de Sistemas, onde aprofundo meu conhecimento em programação, desenvolvimento de sistemas e gerenciamento de banco de dados. Participo de projetos que me permitem aplicar teorias na prática, enfrentando desafios reais e colaborando em equipe para criar soluções eficazes. Além disso, estou desenvolvendo uma compreensão sólida de metodologias de desenvolvimento ágil e boas práticas de codificação.</p>
            <p className="experiencia-ferramentas">Ferramentas:</p>
            <div className="experiencia-icons">
              <FaHtml5 size={30} color="white" />
              <FaCss3Alt size={30} color="white" />
              <FaJsSquare size={30} color="white" />
              <FaPhp size={30} color='white'/>
              <FaJava size={30} color='white'/>
              <TbSql size={30} color='white'/>
            </div>
          </div>
        </div>

        <hr id='divisoria'/>

        <h3 className="curso-titulo">Cursos Complementares</h3>
        
        <div className="experiencia-item">
          <div className="linha-tempo"></div>
          <div className="experiencia-bolinha"></div>
          <div className="experiencia-detalhes">
            <h4>Desenvolvimento Web Completo</h4>
            <p className="experiencia-empresa">UDEMY</p>
            <p className="experiencia-periodo">118H</p>
          </div>
          <div className="experiencia-descricao">
            <p>Criação de aplicações WEB: Do front ao back-end e banco de dados com HTML5, CSS3, BootStrap 4, JS, ES6, ES7, PHP 7, OO, MySQL, JQuery, MVC, API, IONIC e Wordpress.</p>
            <p className="experiencia-ferramentas">Ferramentas:</p>
            <div className="experiencia-icons">
              <FaHtml5 size={30} color="white" />
              <FaCss3Alt size={30} color="white" />
              <FaJsSquare size={30} color="white" />
              <FaBootstrap size={30} color='white'/>
              <FaPhp size={30} color='white'/>
              <TbSql size={30} color='white'/>
              <DiJqueryLogo size={30} color='white' />
            </div>
          </div>
        </div>

        <div className="experiencia-item">
          <div className="linha-tempo"></div>
          <div className="experiencia-bolinha"></div>
          <div className="experiencia-detalhes python">
            <h4>Aprendendo com Python</h4>
            <p className="experiencia-empresa">Conteúdo by: Columbia University</p>
            <p className="experiencia-empresa">Certificação by: ENAP</p>
            <p className="experiencia-periodo">20H</p>
          </div>
          <div className="experiencia-descricao">
            <p>Fundamentos da ciência da computação usando a sintaxe de programação do Python. Além disso, feita a aplicação da linguagem para resolver problemas e frameworks, bibliotecas e pacotes para diferentes contextos.</p>
            <p className="experiencia-ferramentas">Ferramentas:</p>
            <div className="experiencia-icons">
              <FaPython size={30} color='white'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
