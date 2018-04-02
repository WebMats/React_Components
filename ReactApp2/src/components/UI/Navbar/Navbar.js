import React from 'react';

import NavItems from './NavItems/NavItems';

import Css from './Navbar'


const navBar = (props) => (
	<nav>
		<div className={Css.NavItemsWrapper}>
			<NavItems />
		</div>
	</nav>


	);

export default navBar ;