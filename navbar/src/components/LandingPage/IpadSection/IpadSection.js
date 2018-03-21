import React from 'react';

import Button from '../../UI/Button/Button';

import Css from './IpadSection.css';


const ipadsection = (props) => (
		<section className={Css.Section}>
			<div className={Css.TextWrapper}>
				<h2>FIND YOUR PERFECT MATCH.</h2>
				<p>We get to know you, your space, the things you love to do -- or hope to do -- in your home. Then we match you with the perfect designer to get you there.</p>
				<div className={Css.Button}>
					<Button>GET STARTED</Button>
				</div>
			</div>
		</section>
	);

export default ipadsection ;