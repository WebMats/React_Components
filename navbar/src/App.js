import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import LandingPage from './containers/LandingPage/LandingPage';



import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Switch>
      	<Route exact path="/" componet={LandingPage} />
      	</Switch>
      </div>
    );
  }
}

export default App;
