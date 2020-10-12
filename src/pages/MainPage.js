import React, { Fragment } from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Servicii from '../components/Servicii';
import Showcase from '../components/Showcase';

const MainPage = () => {
  
  return (
    <Fragment>
      <Showcase />
      <Servicii />
      <About />
      <Contact />
    </Fragment>
  );
};

export default MainPage;
