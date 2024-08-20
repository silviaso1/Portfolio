import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';
import './footer.css';

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">


                {/* Redes Sociais */}
                <div className="footer-section social-media">
                    <h4>Minhas redes</h4>
                    <div className="social-icons">
                        <a href="https://github.com/silviaso1" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://linkedin.com/in/silviaso1" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    </div>
                </div>

                {/* Contato */}
                <div className="footer-section contact-info">
                    <h4>Contato</h4>
                    <p><FaEnvelope /> silviasoares423@gmail.com</p>
                </div>
            </div>

            {/* Créditos e Direitos Autorais */}
            <div className="footer-bottom">
                <p>&copy; 2024 Silvia Soares. Todos os direitos reservados</p>
            </div>
        </footer>
    );
}
