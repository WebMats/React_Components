import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import HomePage from './containers/HomePage/HomePage';
import Menu from './containers/Menu/Menu';


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

export default App ;