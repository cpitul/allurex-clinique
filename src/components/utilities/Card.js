import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ cardContent }) => {
  const { title, text, link } = cardContent;
  return (
    <Link to={link}>
      <div className='card'>
        <div className='card-content'>
          <h3 className='card-title'>{title}</h3>
          <div className='card-line'></div>
          <p className='card-text'>{text}</p>
          <p className='card-link'>Află mai multe</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
