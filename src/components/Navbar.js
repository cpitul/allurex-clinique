import React from 'react';
import Logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav>
      <div id='logo'>
        <a id='logo-img-link' href='/'>
          <img id='logo-img' src={Logo} alt='logo' />
        </a>
        <p id='logo-text'>Mereu aproape de tine</p>
      </div>

      <div>
        <ul className='nav-links'>
          <li className='nav-link'>
            <a href='/#showcase'>Acasă</a>
          </li>
          <li className='nav-link'>
            <a href='/#servicii'>Servicii</a>
          </li>
          <li className='nav-link'>
            <a href='/#despre-noi'>Despre noi</a>
          </li>
          <li className='nav-link'>
            <a href='/#contact'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
