import React, {useState} from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';


const Navbar = () => {
  const [nav, setNav] = useState(false)
  
  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setNav(true)
    } else {
      setNav(false)
    }
  }

  const handleClick = () => {
    window.scrollTop = 0;
  }
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)

    // eslint-disable-next-line
  }, [])

  return (
    <nav className={nav ? 'dark-nav' : ''}>
      <div className="nav-bar">
        <Link to='/' id='logo'>
          <a id='logo-img-link' href='/'>
            <img id='logo-img' src={Logo} alt='logo' />
          </a>
          <p id='logo-text' className={nav ? 'dark-nav-text' : ''}>Mereu aproape de tine</p>
        </Link>

        <div>
          <ul className='nav-links'>
            <li className={nav ? 'nav-link dark-nav-text' : 'nav-link'}>
              <a onClick={() => handleClick()} href='#'>Acasă</a>
            </li>
            <li className={nav ? 'nav-link dark-nav-text' : 'nav-link'}>
              <a href='/#servicii'>Servicii</a>
            </li>
            <li className={nav ? 'nav-link dark-nav-text' : 'nav-link'}>
              <a href='/#despre-noi'>Despre noi</a>
            </li>
            <li className={nav ? 'nav-link dark-nav-text' : 'nav-link'}>
              <a href='/#contact'>Contact</a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
