import React from 'react';
import { useEffect } from 'react';

const PageTemplate = ({ pageContent }) => {
  useEffect(() => {
    const html = document.querySelector('html');
    html.scrollTop = 0;
    // eslint-disable-next-line
  }, []);

  const {
    title,
    titleText,
    header1,
    header2,
    text1,
    text2,
    titlePhoto,
    text1Photo,
    text2Photo,
  } = pageContent;
  return (
    <div className='page-template container'>
      <div className='page-template-title-container'>
        <div className='title-content'>
          <div className='title-container'>
            <h1 className='title-header'>{title}</h1>
            <div className='title-line'></div>
          </div>
          <p className='title-text'>{titleText}</p>
        </div>
        <img src={titlePhoto} alt='poza' className='title-photo' />
      </div>
      <div className='page-template-section-1'>
        <img src={text1Photo} alt='poza' className='text-1-photo' />
        <div className='section-1-content'>
          <h3 className='section-1-header'>{header1}</h3>
          <ul className='section-1-list'>
            {text1.map((text) => (
              <li key={text} className='section-1-list-item'>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='page-template-section-2'>
        <div className='section-2-content'>
          <h3 className='section-2-header'>{header2}</h3>
          <p className='section-2-text'>{text2}</p>
        </div>
        <img src={text2Photo} alt='poza' className='text-2-photo' />
      </div>
      <a href='/#contact' className='btn btn-primary'>
        Contactează-ne
      </a>
    </div>
  );
};

export default PageTemplate;
