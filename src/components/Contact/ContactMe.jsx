import React, { useRef, useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaGlobe } from 'react-icons/fa';
import './ContactMe.css';

export function ContactMe() {
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

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para enviar o email
        setStatus('Mensagem enviada com sucesso!');
    };

    return (
        <div className={`ContactMe ${isVisible ? 'fade-in' : ''}`} ref={ref} id='contato'>
            <h1 id='contatar'>CONTATO</h1>
            <h3 id='subtitke-contato'>Me manda um e-mail</h3>
            <div className="contact-me-container">
                <h2 className="contact-me-title">.</h2>
                <div className="contact-info">
                    <div className="info-item">
                        <FaMapMarkerAlt className="info-icon" />
                        <p>Rio de Janeiro</p>
                    </div>
                    <div className="info-item">
                        <FaGlobe className="info-icon" />
                        <p>www.linkedin.com/in/silviaso1/</p>
                    </div>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div id='dados'>
                        <div className="form-group">
                            <label htmlFor="name">Nome</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Digite seu nome"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Digite seu email"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensagem</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Digite sua mensagem"
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-button">Enviar</button>
                    {status && <p className="status-message">{status}</p>}
                </form>
            </div>
        </div>
    );
}
