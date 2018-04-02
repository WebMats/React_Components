import React from 'react';

import Css from './MVdiv.css';


const mvDiv = (props) => (
	<div className={Css.FullWrapper}>
		<div className={Css.Img}></div>
		<div className={Css.TextWrapper}>
			<h2>TRADITIONAL HEART <br /> WITH A MODERN HAND</h2>
			<p>Located in Chicago’s West Loop neighborhood, Monteverde is an Italian restaurant that blends the traditions of Italian culture and cooking with influences from Chef Sarah Grueneberg’s trips around the world, as well as her family heritage.</p>
		</div>
	</div>

	);

export default mvDiv ;