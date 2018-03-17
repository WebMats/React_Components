import React from 'react';

import Toggler from './DrawerToggler/DrawerToggler';


const sideDrawer = (props) => {

	return (

		<Toggler clicked={props.togglerClick} />
		)
	};

export default sideDrawer ;