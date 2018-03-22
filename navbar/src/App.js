import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import GiftACard from './containers/GiftACard/GiftACard'
import LandingPage from './containers/LandingPage/LandingPage';




import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Layout>
      		<Switch>
      			<Route exact path="/" component={LandingPage} />
            <Route exact path="/give-a-card" component={GiftACard} />
            <Redirect to="/" />
      		</Switch>
      	</Layout>
      </div>
    );
  }
}

export default App;
