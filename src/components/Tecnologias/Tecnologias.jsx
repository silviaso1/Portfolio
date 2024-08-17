import React from 'react';
import './tecnologias.css';
import iconReact from '../imgs/react.png'; 
import vue from '../imgs/vue.png'; 
import html from '../imgs/html.png'; 
import css from '../imgs/css.png'; 
import js from '../imgs/js.png'; 
import php from '../imgs/php.png';
import github from '../imgs/github.png';
import node from '../imgs/node.png';
import figma from '../imgs/figma.png';

export function Tecnologias() {
    return (
        <div className="tecnologias-container">
            <div className="tecnologia-card">
                <h3>Tool</h3>
                <p>Ferramentas usadas para aplicações web.</p>
                <div className="icon-grid">
                    <img src={html} alt="HTML5" />
                    <img src={css} alt="CSS3" />
                    <img src={js} alt="JavaScript" />
                    <img src={node}alt="Node.js" />
                    <img src={php} alt="PHP" />
                </div>
            </div>
            
            <div className="tecnologia-card">
                <h3>Framework</h3>
                <p>Framework adotado em minhas aplicações.</p>
                <div className="icon-grid">
                    <img src={vue} alt="Vue.js" />
                    <img src={iconReact} alt="React" />
                </div>
            </div>

            <div className="tecnologia-card">
                <h3>Expertises</h3>
                <p>Instrumentos empregados cotidianamente em aplicações.</p>
                <div className="icon-grid">
                    <img src={figma} alt="Figma" />
                    <img src={github} alt="GitHub" />
                </div>
            </div>
        </div>
    );
}
