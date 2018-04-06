import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import HomePage from './Containers/HomePage/HomePage';
import Menu from './Containers/Menu/Menu';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/menu" component={Menu} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
