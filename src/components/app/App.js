import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from '../home/Home';

import './App.css';

class App extends React.Component {

  render() { return this._componentJsxElement(); }

  /** Returns `JSX.Element` containing component content structure. */
  _componentJsxElement() {
    return (
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

export default App;
