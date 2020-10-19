import React, { Fragment } from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Servicii from '../components/Servicii';
import Showcase from '../components/Showcase';
import ScrollTop from '../components/utilities/ScrollTop';

const MainPage = () => {
  
  return (
    <Fragment>
      <Showcase />
      <Servicii />
      <About />
      <Contact />
      <ScrollTop />
    </Fragment>
  );
};

export default MainPage;
