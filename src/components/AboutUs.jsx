import React from 'react';
import '../components/css/Componentscss.css'
import aboutUsimg from './images/aboutus.jpg'

function AboutUs() {
  return (
    <section id="about-us" className="about-us">
      <div className="container">
        <h2>О нас</h2>
        <div className="about-us-content">
          <div className="about-us-text">
            <p>
              Мы - команда профессионалов, стремящихся к созданию инновационных решений и предоставлению высококачественных услуг. Наша цель - помочь вам достичь ваших бизнес-целей с помощью передовых технологий и индивидуального подхода.
            </p>
            <p>
              Наша компания имеет богатый опыт работы в различных отраслях, включая IT, маркетинг и консалтинг. Мы гордимся нашими достижениями и стремимся к постоянному совершенствованию.
            </p>
          </div>
          <div className="about-us-image">
            <img src={aboutUsimg} alt="Our Team" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
