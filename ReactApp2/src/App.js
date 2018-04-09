import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import AsyncComponent from './hoc/AsyncComponent/AsyncLoading';

import HomePage from './Containers/HomePage/HomePage';
import Menu from './Containers/Menu/Menu';

import './App.css';


const asyncCareers = AsyncComponent(() => {
  return import('./Containers/Careers/Careers');
})



class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/menu" component={Menu} />
          <Route path="/careers" component={asyncCareers} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
