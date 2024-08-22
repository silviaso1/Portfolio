import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import './nav.css';

function scrollToElement(id, event) {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="Nav" id='nav'>
            <button className="menu-icon" onClick={toggleMenu}>
                < IoMdMenu size={30}/>
            </button>
            <ul className={menuOpen ? 'open' : ''}>
                <li><a href="#home" onClick={(e) => scrollToElement('home', e)} id='home'>Home</a></li>
                <li><a href="#formacao" onClick={(e) => scrollToElement('formacao', e)} className='outros'>Formação</a></li>
                <li><a href="#skills" onClick={(e) => scrollToElement('skills', e)}  className='outros'>Skills</a></li>
                <li><a href="#projetos" onClick={(e) => scrollToElement('projetos', e)}  className='outros'>Projetos</a></li>
                <li><a href="#contato" onClick={(e) => scrollToElement('contato', e)}  className='outros'>Contato</a></li>
            </ul>
        </div>
    )
}
