import React from 'react';
import { useEffect } from 'react';
import BackButton from '../utilities/BackButton'
import '../../css/pageTemplate.css'
import PhotoGallery from './PhotoGallery';
import NavbarPages from '../NavbarPages'
import Details from './Details';

const PageTemplate = ({ pageContent }) => {
  useEffect(() => {
    const html = document.querySelector('html');
    html.scrollTop = 0;
    window.scrollTo(0,0);
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
    text2List
  } = pageContent;
  return (
    <div className='page-template container'>
      <NavbarPages />
      <BackButton />
      <div className='page-template-title-container'>
        <div className='title-content'>
          <div className='title-container'>
            <h1 className='title-header'>{title}</h1>
          </div>
          <p className='title-text'>{titleText}</p>
          {pageContent.titleText2 && <p className='title-text-2'>{pageContent.titleText2}</p> }
          {pageContent.titleList && <ul className='title-list'> {pageContent.titleList.map((item, index) => <li key={index} className="title-list-item">{item}</li> )} </ul> }
        </div>
        <img src={titlePhoto} alt='poza' className='title-photo' />
      </div>
      <div className='page-template-section-1'>

        <div className="text-1-photo-container">
          <img src={text1Photo} alt='poza' className='text-1-photo' />
        </div>

        <div className='section-1-content'>
          
          <h3 className='section-1-header'>{header1}</h3>
          {pageContent.section1Text && <p className="section-1-text">{pageContent.section1Text}</p> }
          {pageContent.section1Text2 && <p className="section-1-text-2">{pageContent.section1Text2}</p> }
          {pageContent.section1Text3 && <p className="section-1-text-3">{pageContent.section1Text3}</p> }
          {text1 && <ul className='section-1-list'>
            {text1.map((text) => (
              <li key={text} className='section-1-list-item'>
                {text}
              </li>
            ))}
          </ul>}

        </div>

        {pageContent.section1Details && <Details indicatii={pageContent.section1Details.indicatii} contraindicatii={pageContent.section1Details.contraindicatii} /> }
      </div>
      <div className='page-template-section-2'>
        <div className='section-2-content'>
          <h3 className='section-2-header'>{header2}</h3>
          <p className='section-2-text'>{text2}</p>
          {pageContent.text2Part2 && <p className="section-2-text-2">{pageContent.text2Part2}</p> }
          {text2List && <ul className='section-2-list'>
            {text2List.map(item => <li className="section-2-list-item">{item}</li> )}
            </ul>}
        </div>
        <div className="text-2-photo-container">
          <img src={text2Photo} alt='poza' className='text-2-photo' />
        </div>
        {pageContent.section2Details && <Details indicatii={pageContent.section2Details.indicatii} contraindicatii={pageContent.section2Details.contraindicatii} /> }
      </div>
      <div className="page-template-section-3">
              {pageContent.text3Photo && <div className="text-3-photo-container">
                <img src={pageContent.text3Photo} alt="poza" className='text-3-photo' />
              </div>}
              <div className="section-3-content">
                {pageContent.header3 && <h3 className='section-3-header'>{pageContent.header3}</h3>}
                {pageContent.text3 && <p className="section-3-text-1">{pageContent.text3}</p>}
                {pageContent.text3Part2 && <p className="section-3-text-2">{pageContent.text3Part2}</p> }
                {pageContent.contraindicatii && <ul className="section-3-list">
                  {pageContent.contraindicatii.map(item => <li className="section-3-list-item">{item}</li> )}
                </ul>}
              </div>
              {pageContent.section3Details && <Details indicatii={pageContent.section3Details.indicatii} contraindicatii={pageContent.section3Details.contraindicatii} /> }
        </div>
      <a href='/#contact' className='btn btn-primary'>
        Contactează-ne
      </a>
      {pageContent.photos && <PhotoGallery photos={pageContent.photos} /> }
      <BackButton />
    </div>
  );
};

export default PageTemplate;
