import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TecarPage from './pages/TecarPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/tecar' component={TecarPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
