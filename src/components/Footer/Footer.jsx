import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';
import './footer.css';

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Links Rápidos */}
                <div className="footer-section quick-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Redes Sociais */}
                <div className="footer-section social-media">
                    <h4>Follow Me</h4>
                    <div className="social-icons">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    </div>
                </div>

                {/* Contato */}
                <div className="footer-section contact-info">
                    <h4>Contact</h4>
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
