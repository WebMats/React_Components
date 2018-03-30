import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import asyncComponent from './hoc/AsyncComponent/AsyncLoading';
import Layout from './hoc/Layout/Layout';

import LandingPage from './containers/LandingPage/LandingPage';

import './App.css';


const asyncGiftCard = asyncComponent(() => {
  return import('./containers/GiftACard/GiftACard')
});

const asyncLogin = asyncComponent(() => {
  return import ('./containers/Login/Login')
})

const asyncShop = asyncComponent(() => {
  return import('./containers/Shop/Shop')
})


class App extends Component {
  render() {
    return (
      <div className="App">
      <Layout>
      		<Switch>
      			<Route exact path="/" component={LandingPage} />
            <Route exact path="/give-a-card" component={asyncGiftCard} />
            <Route path="/login" component={asyncLogin} />
            <Route path="/shop" component={asyncShop} />
            <Redirect to="/" />
      		</Switch>
      	</Layout>
      </div>
    );
  }
}

export default App;
