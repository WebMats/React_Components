import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import asyncComponent from './hoc/AsyncComponent/AsyncLoading';

import HomePage from './containers/HomePage/HomePage';


const asyncMenu = asyncComponent(() => {
	return import('./containers/Menu/Menu')
});

class App extends Component {
	render() {
	return (
	<div className="App">
	 <Switch>	
	 	<Route exact path="/" component={HomePage} />
	 	<Route path="/menu" component={asyncMenu} />
	 	
	 </Switch>
	 </div>
	);
	}
}

export default App ;