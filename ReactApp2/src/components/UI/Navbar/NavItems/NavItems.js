import React from 'react';

import NavItem from './NavItem/NavItem';

import Css from './NavItems.css';

const navItems = (props) => (
		<ul className={Css.ListWrapper}>
			<NavItem exact={true} link="/" >HOME</NavItem>
			<NavItem link="/menu" >MENU</NavItem>
			<NavItem link="/reservations" >RESERVATIONS</NavItem>
			<NavItem link="/events" >EVENTS</NavItem>
			<NavItem link="/contact" >CONTACT</NavItem>
			<NavItem link="/careers" >CAREERS</NavItem>
			<NavItem link="/recipes" >RECIPES</NavItem>
		</ul>

	);

export default navItems ;