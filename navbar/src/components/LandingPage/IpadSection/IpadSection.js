import React from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

import Css from './IpadSection.css';


const ipadsection = (props) => (
	<Aux>
		<section className={Css.Section}>
			<div className={Css.TextWrapper}>
				<h2>FIND YOUR PERFECT MATCH.</h2>
				<p>We get to know you, your space, the things you love to do -- or hope to do -- in your home. Then we match you with the perfect designer to get you there.</p>
				<div className={Css.Button}>
					<Button>GET STARTED</Button>
				</div>
			</div>
		</section>
		<div className= {Css.TextWrapperTwo}>
			<h2>EVERY STYLE. EVERY BUDGET.</h2>
			<p>Come inside and get to know our favorite clients and the spaces they love.</p>
			<a><h3>SEE OUR WORK &rarr;</h3></a>
		</div>
	</Aux>
	);

export default ipadsection ;