import React from 'react';

import Css from './DrawerToggler.css';


const drawerToggler = (props) => (
	<div className ={Css.Toggler} onClick={props.clicked}>
		<div className={Css.TogBarFirst}></div>
		<div className={Css.TogBarMid}></div>
		<div className={Css.TogBarLast}></div>
	</div>

	);

export default drawerToggler ;