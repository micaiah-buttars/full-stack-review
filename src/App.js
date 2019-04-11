import React, { Component } from 'react';
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom'
import Login from './components/Login/Login'
import Private from './components/Private/Private'

// Import components here, and have them as the routes.

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route component={Login} path='/' exact/>
          <Route component={Private} path='/private'/>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
