import React, {useState, useEffect} from 'react';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  
  const handleScroll = () => {
    if (window.scrollY >= 100) { 
      setNav(true)
    } else {
      setNav(false)
    }
  }

  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)

    // eslint-disable-next-line
  }, [])

  return (
    <nav className={nav ? 'dark-nav' : ''}>
      <div className="nav-bar">
        <a href='/#showcase-anchor' id='logo' className={nav ? 'dark-nav-link' : ''}>
          <div id='logo-img-link'>
            <img id='logo-img' src={Logo} alt='logo' />
          </div>
          <p id='logo-text' className={nav ? 'dark-nav-text' : ''}>Mereu aproape de tine</p>
        </a>

        <div>
          <ul className='nav-links'>
            <li className={nav ? 'nav-link dark-nav-text' : 'nav-link'}>
              <a href='/#showcase-anchor'>
                Acasă
              </a>
            </li>
            <li className={nav ? 'nav-link dark-nav-text' : 'nav-link'}>
              <a href='/#servicii-anchor'>
                Servicii
              </a>
            </li>
            <li className={nav ? 'nav-link dark-nav-text' : 'nav-link'}>
              <a href='/#despre-noi-anchor'>
                Despre noi
              </a>
            </li>
            <li className={nav ? 'nav-link dark-nav-text' : 'nav-link'}>
              <a href='/#contact-anchor'>
                Contact
              </a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
