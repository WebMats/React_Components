import React from 'react';

import NavItem from '../UI/Navbar/NavItems/NavItem/NavItem';
import BrandLogo from '../../assets/images/lw-logo.svg';
import BrandLogoMobile from '../../assets/images/lw-mobile.svg';

import Css from './Logo.css';

const logo = (props) => (
	<div className={Css.LogoWrap}>
		<NavItem exact link="/">
			<img className={Css.Logo} src={BrandLogo} alt="Laurel & Wolf" />
			<img className={Css.LogoMobile} src={BrandLogoMobile} alt="Laurel & Wolf" />
		</NavItem>
	</div>
	);
export default logo;