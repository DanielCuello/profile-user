"use client"

import React, { useState } from 'react';
import styles from '../../../styles/ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <section className={styles.contact}>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Mensaje:
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </label>
        <button type="submit">Enviar</button>
      </form>
      {success && <p>¡Mensaje enviado con éxito!</p>}
    </section>
  );
};

export default ContactForm;