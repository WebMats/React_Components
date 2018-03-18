import React, {Component} from 'react';

import Navbar from '../../components/UI/Navbar/Navbar';
import Aux from '../Aux/Aux';
import SideDrawer from '../../components/UI/Navbar/SideDrawer/SideDrawer';

import Css from './Layout.css';


class Layout extends Component {
	state = {
		toggleNavMenu: false
	}


toggleMenuHandler = (event) => {
	this.setState({toggleNavMenu:!this.state.toggleNavMenu})
}

	render() {
		return (
			<Aux>
				<Navbar />
				<div className={Css.MobileNav}>
					<SideDrawer 
					toggled = {this.state.toggleNavMenu}
					togglerClick={this.toggleMenuHandler} />
				</div>
				<main className={Css.Content}>
					{this.props.children}
				</main>
			</Aux>
			);
	}
}

export default Layout;