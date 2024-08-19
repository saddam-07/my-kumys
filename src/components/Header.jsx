import React from 'react';
import '../App.css';
import '../components/css/Componentscss.css'
import { FaHome, FaInfoCircle, FaEnvelope, FaSuitcase } from 'react-icons/fa';


function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Кумыс</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#/"><FaHome /> Главная</a></li>
          <li><a href="#aboutus"><FaInfoCircle /> О нас</a></li>
          <li><a href="#contact"><FaEnvelope /> Контакты</a></li>
          <li><a href="#about"><FaSuitcase /> Наши работы</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;


