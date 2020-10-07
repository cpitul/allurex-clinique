import React from 'react';
import AboutSection from './utilities/AboutSection';
import firstImage from '../assets/12.jpg';
import secondImage from '../assets/24.jpg';
import thirdImage from '../assets/6.jpg';
import fourthImage from '../assets/25.jpg';

const About = () => {
  const content = [
    {
      id: 1,
      image: firstImage,
      text:
        'Echipa de specialisti AllureX, ne-am propus să vă oferim tot ce este mai bun în materie de servicii medicale, să vă ascultăm și să fim atenți la exigențele voastre, pentru ca în final să reușim să stabilim un raport de încredere și de respect reciproc.',
      color: '#2999bc',
      location: 'left',
    },
    {
      id: 2,
      image: secondImage,
      text:
        'Prin serviciile noastre vrem să concretizăm mai mult decât un simplu schimb comercial.',
      color: '#fac970',
      location: 'right',
    },
    {
      id: 3,
      image: thirdImage,
      text:
        'Suntem sensibili și atenți la problemele pe care le aveți, vă vom ajuta să vă simțiți în largul vostru, atât în compania medicilor, a terapeuților, cât și în cea a instrumentelor ori a aparatelor medicale.',
      color: '#2999bc',
      location: 'left',
    },
    {
      id: 4,
      image: fourthImage,
      text:
        'Vă așteptăm cu servicii personalizate de KINETOTERAPIE în sinergie cu FIZIOTERAPIA și cu alte proceduri medicale sub îndrumarea unui medic specialist de recuperare medicala și/sau dermatologie.',
      color: '#fac970',
      location: 'right',
    },
  ];

  return (
    <section id='despre-noi'>
      <h1 id='about-heading'>Despre noi</h1>
      <div className='container' id='despre-noi-content'>
        {content.map((info) => (
          <AboutSection
            key={info.id}
            image={info.image}
            text={info.text}
            color={info.color}
            id={info.id}
            location={info.location}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
