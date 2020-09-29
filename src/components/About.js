import React from 'react';
import AboutSection from './utilities/AboutSection';
import firstImage from '../assets/12.jpg';
import secondImage from '../assets/24.jpg';
// import thirdImage from '../assets/';
// import fourthImage from '../assets/';

const About = () => {
  const content = {
    first: {
      id: 1,
      image: firstImage,
      text:
        'Echipa de specialisti AllureX, ne-am propus să vă oferim tot ce este mai bun în materie de servicii medicale, să vă ascultăm și să fim atenți la exigențele voastre, pentru ca în final să reușim să stabilim un raport de încredere și de respect reciproc.',
      color: '#2999bc',
      location: 'left',
    },
    second: {
      id: 2,
      image: secondImage,
      text:
        'Prin serviciile noastre vrem să concretizăm mai mult decât un simplu schimb comercial.',
      color: '#fac970',
      location: 'right',
    },
    // third: {
    //   id: 3,
    //   image: thirdImage,
    //   text:
    //     'Suntem sensibili și atenți la problemele pe care le aveți, vă vom ajută să vă simțiți în largul vostru, atât în compania medicilor, a terapeuților, cât și în cea a instrumentelor ori a aparatelor medicale.',
    //   color: '#2999bc',
    // },
    // fourth: {
    //   id: 4,
    //   image: fourthImage,
    //   text:
    //     'Vă așteptăm cu servicii personalizate de KINETOTERAPIE în sinergie cu FIZIOTERAPIA și cu alte proceduri medicale sub îndrumarea unui medic specialist de recuperare medicala și/sau dermatologie.',
    //   color: '#fac970',
    // },
  };

  return (
    <section id='despre-noi'>
      <h2 id='about-heading'>Despre noi</h2>
      <div className='container' id='despre-noi-content'>
        <AboutSection
          image={content.first.image}
          text={content.first.text}
          color={content.first.color}
          id={content.first.id}
          location={content.first.location}
        />
        <AboutSection
          image={content.second.image}
          text={content.second.text}
          color={content.second.color}
          id={content.second.id}
          location={content.second.location}
        />
      </div>
    </section>
  );
};

export default About;
