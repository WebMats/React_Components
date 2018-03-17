import React from 'react';

import Css from './Button.css';

const button = (props) => (

	<button className={Css.Button}>
		{props.children}
	</button>

	);

export default button;

