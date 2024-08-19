import React from 'react';
import '../components/css/Componentscss.css'
import img1 from './images/eb995f.jpg'
import img2 from './images/1.jpg'
import img3 from './images/2.jpg'
import img4 from './images/3.jfif'
import img5 from './images/4.jfif'
import img6 from './images/eb995f.jpg'

const aboutData = [
  {
    imgSrc: img1,
    title: 'Кумыс 1',
    description: 'Кумыс это древний традиционный напиток.'
  },
  {
    imgSrc: img2,
    title: 'Кумыс 2',
    description: 'Кумыс это древний традиционный напиток.'
  },
  {
    imgSrc: img3,
    title: 'Кумыс 3',
    description: 'Кумыс это древний традиционный напиток.'
  },
  {
    imgSrc: img4,
    title: 'Кумыс 4',
    description: 'Кумыс это древний традиционный напиток.'
  },
  {
    imgSrc:  img5,
    title: 'Кумыс 5',
    description: 'Кумыс это древний традиционный напиток.'
  },
  {
    imgSrc: img6,
    title: 'Кумыс 6',
    description: 'Кумыс это древний традиционный напиток.'
  }
];

function About() {
  return (
    <section className="about">
      <h2>О нашых работ</h2>
      <div className="about-content">
        {aboutData.map((item, index) => (
          <div className="about-item" key={index}>
            <img src={item.imgSrc} alt={item.title} />
            <div className="about-item-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
