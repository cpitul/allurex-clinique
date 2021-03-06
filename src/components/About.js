import React from 'react';
import AboutSection from './utilities/AboutSection';
import firstImage from '../assets/page_photos/despre_noi/1.jpg';
import secondImage from '../assets/page_photos/despre_noi/2.jpg';
import thirdImage from '../assets/page_photos/despre_noi/3.jpg';
import fourthImage from '../assets/page_photos/despre_noi/4.jpg';

const About = () => {
  const content = [
    {
      id: 1,
      image: firstImage,
      text:
        'Noi, cei din echipa de specialiști Allurex, vă oferim tot ce este mai bun în materie de servicii medicale, vă ascultăm și suntem atenți la exigențele voastre, pentru ca în final să reușim să stabilim un raport de încredere și de respect reciproc.',
      color: '#2999bc',
      location: 'left',
    },
    {
      id: 2,
      image: secondImage,
      text:
        'Prin serviciile noastre concretizăm mai mult decât un simplu schimb comercial.',
      color: '#fac970',
      location: 'right',
    },
    {
      id: 3,
      image: thirdImage,
      text:
        'Suntem sensibili și atenți la problemele pe care le aveți, vă ajutăm să vă simțiți în largul vostru, atât în compania medicilor și a terapeuților, cât și în cea a instrumentelor ori a aparatelor medicale.',
      color: '#2999bc',
      location: 'left',
    },
    {
      id: 4,
      image: fourthImage,
      text:
        'Vă oferim servicii personalizate de KINETOTERAPIE în sinergie cu FIZIOTERAPIA și cu alte proceduri medicale sub îndrumarea unui medic specialist de recuperare medicală și/sau dermatologie.',
      color: '#fac970',
      location: 'right',
    },
  ];

  return (
    <section id='despre-noi'>
      <div id="despre-noi-anchor"></div>
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
