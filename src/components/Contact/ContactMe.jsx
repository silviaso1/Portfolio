import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaGlobe } from 'react-icons/fa';
import './ContactMe.css';

export function ContactMe() {
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
        <div className='ContactMe'>
            <h1>CONTATO</h1>
            <h3>Entre em contato comigo!</h3>
            <div className="contact-me-container">
            <h2 className="contact-me-title">Entre em contato!</h2>
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
