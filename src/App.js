import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Showcase />
      <About />
    </div>
  );
}

export default App;
