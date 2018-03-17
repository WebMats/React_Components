import React from 'react';

import NavItem from './NavItem/NavItem';

import Css from './NavItems.css';


const NavItems = (props) => (
	<ul className={Css.NavItems}>
		<NavItem link="/gift-cards">GIFT CARDS</NavItem>
		<NavItem link="/how-it-works">{`HOW IT WORKS ${String.fromCharCode(9663)}`}</NavItem>
		<NavItem link="/shop">SHOP</NavItem>
		<NavItem link="/magazine">{`MAGAZINE ${String.fromCharCode(9663)}`}</NavItem>
		<NavItem link="/login">LOGIN</NavItem>
	</ul>
	);

export default NavItems;