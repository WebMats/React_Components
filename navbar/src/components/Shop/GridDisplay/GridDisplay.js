import React from 'react';

import Button from '../../UI/Button/Button';

import Css from './GridDisplay.css';


const gridDisplay = (props) => (
		<div className={Css.GridWrapper}>					
			<div className={Css.Cali}>
				<h3>CALIFORNIA MODERN LIVING ROOM</h3>
				<h4>SHOP NOW</h4>
				<div className={Css.Button}>
					<Button>SHOP THIS LOOK</Button>
				</div>
			</div>
			<div className={Css.Trad}>
				<h3>TRADITIONAL BEDROOM AT ANY BUDGET</h3>
				<h4>SHOP NOW</h4>
			</div>
			<div className={Css.Small}>
				<h3>SMALL SPACE LIVING</h3>
				<h4>SHOP NOW</h4>
			</div>
			<div className={Css.Holly}>
				<h3>HOLLYWOOD STARLET SPACE</h3>
				<h4>SHOP NOW</h4>
			</div>
			<div className={Css.Couch}>
				<h3>COUCHES AT EVERY BUDGET</h3>
				<h4>SHOP NOW</h4>
			</div>
			<div className={Css.Elegant}>
				<h3>ELEGANT DINING ROOM</h3>
				<h4>SHOP NOW</h4>
			</div>
		</div>
	);

export default gridDisplay ;