import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from '../home/Home';
import About from '../about/About';

import './App.css';
import Experiennce from '../experience/Experience';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';

class App extends React.Component {

  render() { return this._componentJsxElement(); }

  /** Returns `JSX.Element` containing component content structure. */
  _componentJsxElement() {
    return (
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/projects3">
          <Projects page={3} />
        </Route>
        <Route path="/projects2">
          <Projects page={2} />
        </Route>
        <Route path="/projects1">
          <Projects page={1} />
        </Route>
        <Route path="/skills" component={Skills} />
        <Route path="/experience" component={Experiennce} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

export default App;
