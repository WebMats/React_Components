import React from 'react';

import NavItem from './NavItem/NavItem';

import Css from './NavItems.css';


const NavItems = (props) => {

	let dropdownOne = (
			<ul className={Css.ListOne}>
				<div>
					<li>OUR SERVICES</li>
					<li>PRICING</li>
					<li>PRESS</li>
					<li>FAQ</li>
				</div>
				<div>
					<li>REFER A FRIEND</li>
					<li>DESIGNER DIRECTORY</li>
					<li>OUR WORK</li>
					<li>REVIEWS</li>
				</div>
			</ul>
				);
	let dropdownTwo = (
			<ul className={Css.ListTwo}>
				<li>HOME TOUR</li>
				<li>TRENDS</li>
				<li>DECOR IDEAS</li>
			</ul>
				);

	return (
	<ul className={Css.NavItems}>
		<NavItem link="/give-a-card">GIFT CARDS</NavItem>

		<div className={Css.Dropdown}>
			<NavItem 
			dropdown={dropdownOne} 
			link="/how-it-works">
				{`HOW IT WORKS ${String.fromCharCode(9663)}`}
			</NavItem>
		</div>
		<NavItem link="/shop">SHOP</NavItem>

		<div className={Css.Dropdown}>
			<NavItem 
			dropdown={dropdownTwo}
			link="/magazine">
				{`MAGAZINE ${String.fromCharCode(9663)}`}
			</NavItem>
		</div>
		<NavItem link="/login">LOGIN</NavItem>
	</ul>
	)
	};

export default NavItems;