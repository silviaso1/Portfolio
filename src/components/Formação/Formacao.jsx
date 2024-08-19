import React from 'react';
import './formacao.css';

export function Formacao() {
    return (
        <section className="Formacao">
            <h2 className="experiencia-titulo">FORMAÇÃO</h2>

            <div className="timeline">
                <h3 className="timeline-titulo">Formação Acadêmica</h3>
                <div className="experiencia-item">
                    <div className="linha-tempo"></div>
                    <div className="experiencia-bolinha"></div>
                    <div className="experiencia-detalhes">
                        <h4>Análise e Desenvolvimento de Sistemas</h4>
                        <p className="experiencia-empresa">FAETERJ-RIO</p>
                        <p className="experiencia-periodo">2023-2025</p>
                    </div>
                    <div className="experiencia-descricao">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis architecto officiis, maxime dolorum minus mollitia inventore odit laborum ad unde officia rem ipsum cupiditate hic eveniet adipisci aut sequi aliquid?</p>
                        <p className="experiencia-ferramentas">Ferramentas:</p>
                        <div className="experiencia-icons">
                            <img src="path/to/vue-icon.png" alt="Vue.js" />
                            <img src="path/to/vite-icon.png" alt="Vite" />
                            <img src="path/to/ts-icon.png" alt="TypeScript" />
                            <img src="path/to/nuxt-icon.png" alt="Nuxt.js" />
                        </div>
                    </div>
                </div>

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
                            <img src="path/to/vue-icon.png" alt="Vue.js" />
                            <img src="path/to/vite-icon.png" alt="Vite" />
                            <img src="path/to/ts-icon.png" alt="TypeScript" />
                            <img src="path/to/nuxt-icon.png" alt="Nuxt.js" />
                        </div>
                    </div>
                </div>

                <div className="experiencia-item">
                    <div className="linha-tempo"></div>
                    <div className="experiencia-bolinha"></div>
                    <div className="experiencia-detalhes">
                        <h4>Aprendendo com Python</h4>
                        <p className="experiencia-empresa">Conteúdo by: Columbia University</p>
                        <p className="experiencia-empresa">Certificação by: ENAP</p>
                        <p className="experiencia-periodo">20H</p>
                    </div>
                    <div className="experiencia-descricao">
                        <p>Fundamentos da ciência da computação usando a sintaxe de programação do Python. Além disso, feita a aplicação da linguagem para resolver problemas e frameworks, bibliotecas e pacotes para diferentes contextos.</p>
                        <p className="experiencia-ferramentas">Ferramentas:</p>
                        <div className="experiencia-icons">
                            <img src="path/to/python-icon.png" alt="Python" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
