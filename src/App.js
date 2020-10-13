import React from 'react';
import './App.css';
import './css/mediaQueriesWeb.css'
import './css/mediaQueriesMobile.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TecarPage from './pages/TecarPage';
import MainPage from './pages/MainPage';
import DermatoPage from './pages/DermatoPage'
import KinetoPage from './pages/KinetoPage'
import CrioPage from './pages/CrioPage'
import PhysioGoPage from './pages/PhysioGoPage'
import KinetoCopiiPage from './pages/KinetoCopiiPage'
import AfectiuniPage from './pages/AfectiuniPage'


const App = () => {
  
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/tecar' component={TecarPage} />
          <Route exact path='/dermatoestetica' component={DermatoPage} />
          <Route exact path='/kineto' component={KinetoPage} />
          <Route exact path='/crioultrasound' component={CrioPage} />
          <Route exact path='/physiogo' component={PhysioGoPage} />
          <Route exact path='/kinetocopii' component={KinetoCopiiPage} />
          <Route exact path='/afectiuni' component={AfectiuniPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
