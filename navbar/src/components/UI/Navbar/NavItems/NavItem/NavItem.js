import React from 'react';
import {NavLink} from "react-router-dom";

import Css from './NavItem.css';


const navItem = (props) => (
		<li className={Css.NavItem}>
			<NavLink
			   exact={props.exact}
			   activeClassName={Css.active}
			   to={props.link}>
			   {props.children}
			 </NavLink>
		</li>
	)

export default navItem;