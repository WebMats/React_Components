import React from 'react';

import NavItems from './NavItems/NavItems'; 
import Logo from '../../Logo/Logo';
import Button from '../Button/Button';

import Css from './Navbar.css';


const navbar = (props) => (
	<nav className={Css.Navbar}>
		<Logo />
		<div className={Css.DesktopNavItems} >
			<NavItems  />
		</div>
		<div className={Css.ButtonWrap}>	
			<Button>GET STARTED</Button>
		</div>
	</nav>
	);
export default navbar;