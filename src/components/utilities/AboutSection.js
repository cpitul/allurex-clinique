import React from 'react';
import Corner from './Corner';

const AboutSection = ({ location, image, text, color, id }) => {
  switch (location) {
    case 'left':
      return (
        <section className={`about-section about-section-${id}`}>
          <div className={`about-photo-${id}`}>
            <Corner location={location} color={color} image={image} />
          </div>
          <p className={`about-text-${location}`} id={`about-text-${id}`}>
            {text}
          </p>
          <div id={`circle-${id}`}></div>
        </section>
      );
    case 'right':
      return (
        <section className={`about-section about-section-${id}`}>
          <div id={`circle-${id}`}></div>
          <p className={`about-text-${location}`} id={`about-text-${id}`}>
            {text}
          </p>
          <div className={`about-photo-${id}`}>
            <Corner location={location} color={color} image={image} />
          </div>
        </section>
      );

    default:
      return <div>Error...</div>;
  }
};

export default AboutSection;
