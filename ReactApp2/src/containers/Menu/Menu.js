import React, {Component} from 'react';

import Navbar from '../../components/UI/Navbar/Navbar';

import Aux from '../../hoc/Aux/Aux';
import Logo from '../../assets/images/logomark.svg';
import MVLogo from '../../assets/images/mv-logo.png';

import Css from './Menu.css';


class Menu extends Component {



	render() {



		return (
			<Aux>
				<div className={Css.LogoWrapper}>
					<img className={Css.Logo} src={Logo} alt="" /> 
					<img src={MVLogo} alt=""/>
				</div>
				<hr />
				<Navbar />
			</Aux>
			);
	}
}

export default Menu;