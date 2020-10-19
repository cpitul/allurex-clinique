import React from 'react';
import Instagram from '../assets/instagram.png';

const Footer = () => {
  // const handleSubmit = (e) => {};

  return (
    <footer>
      <div id='footer-top'>
        <div id='footer-nav'>
          <ul id='footer-links'>
            <li className='footer-link'>
              <a href='/#showcase'>Acasă</a>
            </li>
            <li className='footer-link'>
              <a href='/#servicii'>Servicii</a>
            </li>
            <li className='footer-link'>
              <a href='/#despre-noi'>Despre noi</a>
            </li>
            <li className='footer-link'>
              <a href='/#contact'>Contact</a>
            </li>
          </ul>
        </div>
        {/* <div id='subscribe-form'>
          <h3>Newsletter</h3>
          <form action='post' onSubmit={handleSubmit} id='newsletter-form'>
            <label htmlFor='email'>Email</label>
            <div id='fields'>
              <input type='email' name='email' id='form-email' />
              <input type='submit' value='Abonează-te' id='form-submit' />
            </div>
          </form>
        </div> */}
        <div id='social'>
          <h3>Social Media</h3>
          <div id='social-links'>
            <a
              href='https://www.facebook.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg id='facebook' width='36' height='36' viewBox='0 0 36 36'>
                <path
                  id='Path_132'
                  data-name='Path 132'
                  d='M34.013,0H1.986A1.987,1.987,0,0,0,0,1.987V34.014A1.987,1.987,0,0,0,1.987,36H34.013A1.987,1.987,0,0,0,36,34.014h0V1.986A1.987,1.987,0,0,0,34.013,0Zm0,0'
                  transform='translate(0 0)'
                  fill='#4267b2'
                />
                <path
                  id='Path_133'
                  data-name='Path 133'
                  d='M217.3,107.887V93.965h4.693l.7-5.449h-5.4V85.046c0-1.574.437-2.647,2.694-2.647h2.861V77.538a38.45,38.45,0,0,0-4.192-.214c-4.148,0-6.988,2.531-6.988,7.182v4.01H207v5.449h4.676v13.922Zm0,0'
                  transform='translate(-192.445 -71.887)'
                  fill='#fff'
                />
              </svg>
            </a>
            <a
              href='https://www.instagram.com/allurexclinique/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={Instagram} alt='instagram' id='instagram' />
            </a>
          </div>
        </div>
      </div>
      <div id='footer-bottom'>
        <p id='copyright-text'>
          &copy; AllureX Clinique 2020. Toate drepturile rezervate.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
