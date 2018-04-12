import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import AsyncComponent from './hoc/AsyncComponent/AsyncLoading';

import HomePage from './Containers/HomePage/HomePage';
import Contact from './Containers/Contact/Contact';
import Reservations from './Containers/Reservations/Reservations';
import Menu from './Containers/Menu/Menu';

import './App.css';


const asyncCareers = AsyncComponent(() => {
  return import('./Containers/Careers/Careers');
})

const asyncEvents = AsyncComponent(() => {
  return import('./Containers/Events/Events');
})

const asyncRecipes = AsyncComponent(() => {
  return import('./Containers/Recipes/Recipes')
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/menu" component={Menu} />
          <Route path="/careers" component={asyncCareers} />
          <Route path="/reservations" component={Reservations} />
          <Route path="/recipes" component={asyncRecipes} />
          <Route path="/events" component={asyncEvents} />
          <Route path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
