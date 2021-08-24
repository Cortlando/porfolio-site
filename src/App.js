import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import ContactMe from './components/ContactMe/ContactMe'
import Experience from './components/Experience/Experience';
function App() {


  return (
    <div className="App">
        <HashRouter>
          <div>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/Contact" component={ContactMe}/>
              <Route exact path="/Experience" component={Experience}/>
            </Switch>
          </div>
        </HashRouter>
      
    </div>
  );
}

export default App;
