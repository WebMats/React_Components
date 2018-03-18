import React from 'react';

import Toggler from './DrawerToggler/DrawerToggler';
import NavItems from '../NavItems/NavItems';
import Aux from '../../../../hoc/Aux/Aux';
import Button from '../../Button/Button';
import Backdrop from '../../Backdrop/Backdrop';

import Css from './SideDrawer.css';


const sideDrawer = (props) => {


	let classes = null;
						//TOGGLE SIDEDRAWER BASED ON IF TOGGLER OR BACKDROP WAS PRESSED
	props.toggled ? classes = Css.SideDrawer : classes = [Css.SideDrawer, Css.Close].join(" ")

	let sidedrawer = (
						 <nav className = {classes}>
							<hr className={Css.Line} />
							<NavItems />
							<div className={Css.Button} >
								<Button>GET STARTED</Button>
							</div>
						</nav>
				);
	return (
	<Aux>
		<Toggler toggled = {props.toggled} clicked={props.togglerClick} />
		{sidedrawer}
		<Backdrop show={props.toggled} clicked={props.togglerClick}/>
	</Aux>
		)
	};

export default sideDrawer ;