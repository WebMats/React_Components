import React from 'react';

import Aux from '../../hoc/Aux/Aux';

import Mark from '../../assets/images/logomark.svg';
import Logo from '../../assets/images/mv-logo.png';

import Css from './WaterMark.css';


const watermark = (props) => (
		<Aux>
			<div className={Css.LogoWrapper}>
				<img src={Mark} alt=""/>
				<img src={Logo} alt=""/>
			</div>
			<hr className={Css.Line} />
			<br /> <br /> <br />
		</Aux>
	);

export default watermark ;