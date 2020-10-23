import React, {useState, useEffect} from 'react';
import { Link as ScrollLink } from 'react-scroll'
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
        <ScrollLink to='showcase' id='logo' className={nav ? 'dark-nav-link scroll-link' : 'scroll-link'} smooth={true} offset={-130} duration={500} >
          <div id='logo-img-link'>
            <img id='logo-img' src={Logo} alt='logo' />
          </div>
          <p id='logo-text' className={nav ? 'dark-nav-text' : ''}>Mereu aproape de tine</p>
        </ScrollLink>

        <div>
          <ul className='nav-links'>
            <li className={nav ? 'nav-link dark-nav-text' : 'nav-link'}>
              <ScrollLink to='showcase' smooth={true} offset={-130} duration={500} className='scroll-link'>
                Acasă
              </ScrollLink>
            </li>
            <li className={nav ? 'nav-link dark-nav-text' : 'nav-link'}>
              <ScrollLink to='servicii' smooth={true} offset={-75} duration={500} className='scroll-link'>
                Servicii
              </ScrollLink>
            </li>
            <li className={nav ? 'nav-link dark-nav-text' : 'nav-link'}>
              <ScrollLink to='despre-noi' smooth={true} offset={-90} duration={500} className='scroll-link'>
                Despre noi
              </ScrollLink>
            </li>
            <li className={nav ? 'nav-link dark-nav-text' : 'nav-link'}>
              <ScrollLink to='contact' smooth={true} offset={-100} duration={500} className='scroll-link'>
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
