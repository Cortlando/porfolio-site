import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import ContactMe from './components/ContactMe/ContactMe'
import Experience from './components/Experience/Experience';
import { Toolbar } from '@material-ui/core';
import Skills from './components/Skills/Skills';
import './App.css'
function App() {

  return (
    <div className="App">
      <div id="HeaderSection">
        <Header />
      </div>

      <div id="HomeSection">
        <Toolbar />
        <Home />
      </div>

      <div id="SkillsSection">
        <Skills />
      </div>

      <div id="ExperienceSection">
        <Experience />
      </div>


      <ContactMe />
    </div>
  )
}

export default App;
