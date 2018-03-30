import React from 'react';
import Css from './Backdrop.css';

const backdrop = (props) => (
		props.show ? <div onClick={props.clicked} className={Css.Backdrop}></div> : null
	);

export default backdrop ;