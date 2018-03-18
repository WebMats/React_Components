import React from 'react';

import Css from './DrawerToggler.css';


const drawerToggler = (props) => {


	let classes = [];

		if (props.toggled) {
			classes = [Css.Icon, Css.Active].join(' ')
		}
		if (!props.toggled) {
			classes = [Css.Icon]
		}

	return (
	<div className ={classes} onClick={props.clicked}>
		<div className={Css.Toggler}></div>
	</div>
	);

	};

export default drawerToggler ;