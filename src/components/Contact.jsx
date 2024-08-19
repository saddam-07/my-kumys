import React from 'react';
import '../components/css/Componentscss.css'
import { useState } from 'react';


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Форма отправлена!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact">
      <h2>Связаться с нами</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Наши контакты</h3>
          <p>Адрес: ул. Примерная, 1, Душанбе, Таджикистан</p>
          <p>Телефон: +992 9292929292</p>
          <p>Email: contact@kumys.ru</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Имя</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
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
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Сообщение</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn-primary">Отправить</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

