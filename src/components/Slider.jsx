import React from 'react';
import '../components/css/Componentscss.css'

function Slider() {
  return (
    <section className="slider">
      <div className="slider-content">
        <h2>Добро пожаловать в Кумыс</h2>
        <p>
          Мы рады приветствовать вас в мире инновационных решений и качественного сервиса. Откройте для себя возможности, которые мы предлагаем, и присоединяйтесь к нашему пути к успеху.
        </p>
        <a href="#aboutus" className="btn-primary">Узнать больше</a>
      </div>
    </section>
  );
}

export default Slider;
