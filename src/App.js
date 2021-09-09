import React from 'react';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import ContactMe from './components/ContactMe/ContactMe'
import Experience from './components/Experience/Experience';
import PersonalProject from './components/PersonalProject/PersonalProject';
import Skills from './components/Skills/Skills';
import './App.css'
function App() {

  return (
    <div className="App">
      <div id="HeaderSection" className="HeaderSection">
        <Header />
      </div>

      <div id="HomeSection" className="HomeSection">
      
        <Home />
        
      </div>

      <div id="SkillsSection" className="SkillsSection">
        
        <Skills />
      </div>

      <div id="ExperienceSection" className="ExperienceSection">
        <Experience />
      </div>

      <div id="PersonalProjectSection" className="PersonalProjectSection">
        <PersonalProject />
      </div>

      <div id="ContactMeSection" className="ContactMeSection">
        <ContactMe />
      </div>



    </div>
  )
}

export default App;
