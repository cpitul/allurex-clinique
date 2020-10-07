import React from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Servicii from './components/Servicii';
import Showcase from './components/Showcase';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Showcase />
      <Servicii />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
