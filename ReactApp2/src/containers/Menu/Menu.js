import React, {Component} from 'react';

import Navbar from '../../Components/UI/Navbar/Navbar';
import MenuRoll from '../../Components/Menu/MenuRoll/MenuRoll';

import Aux from '../../hoc/Aux/Aux';
import Mark from '../../assets/images/logomark.svg';
import Logo from '../../assets/images/mv-logo.png';

import Css from './Menu.css';


class Menu extends Component {


	render() {

		return (
		<Aux>
			<div className={Css.LogoWrapper}>
				<img src={Mark} alt=""/>
				<img src={Logo} alt=""/>
			</div>
			<hr className={Css.Line} />
			<br /> <br /> <br />
			<Navbar />
			<MenuRoll />
		</Aux>
			);
	}
}

export default Menu;