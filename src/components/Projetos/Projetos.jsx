import React from 'react';
import './projetos.css';
import Projeto1 from '../imgs/projeto1.png';
import Projeto2 from '../imgs/projeto2.png';
import Projeto3 from '../imgs/projeto3.png';
import Projeto4 from '../imgs/projeto4.png';

export function Projetos() {
    return (
        <div className="portfolio">
            <h1>PROJETOS</h1>
            <h3>Alguns dos meus principais projetos desenvolvidos</h3>
            <div className="cards">
                <div className="card">
                    <img src={Projeto1} alt="Projeto 1" />
                    <div className="overlay">
                        <p>Descrição do Projeto 1</p>
                    </div>
                </div>
                <div className="card">
                    <img src={Projeto2} alt="Projeto 2" />
                    <div className="overlay">
                        <p>Descrição do Projeto 2</p>
                    </div>
                </div>
                <div className="card">
                    <img src={Projeto3} alt="Projeto 3" />
                    <div className="overlay">
                        <p>Descrição do Projeto 3</p>
                    </div>
                </div>
                <div className="card">
                    <img src={Projeto4} alt="Projeto 4" />
                    <div className="overlay">
                        <p>Descrição do Projeto 4</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
