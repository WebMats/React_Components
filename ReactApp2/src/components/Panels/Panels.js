import React from 'react';

import Css from './Panels.css';

import Italy from '../../assets/images/italy-panel.svg'
import Ings from '../../assets/images/ings-panel.svg'
import Crafted from '../../assets/images/crafted-panel.svg'


const panels = (props) => (
	<div className={Css.FullWrapper}>
		<div className={Css.Section}>
			<img src={Italy} alt=""/>
			<div className={Css.TextWrapper}>
				<h2>ITALY</h2>
				<p>Monteverde offers a new way to experience Italian food, highlighting some dishes that are deeply rooted in tradition while others have adventurous new flavors, through the use of global ingredients and cooking methods not usually seen in the Italian kitchen.</p>
			</div>
		</div>
		<div className={Css.Section}>
		<div className={Css.TextWrapper}>
				<h2>SIMPLE INGREDIENTS</h2>
				<p>Using the best of the Midwest as well as from Italy, all of our ingredients follow Grueneberg’s passion for “following the food,” or ensuring that each ingredient is being raised with the highest standards.</p>
			</div>
			<img src={Ings} alt=""/>
		</div>
		<div className={Css.Section}>
			<img src={Crafted} alt=""/>
			<div className={Css.TextWrapper}>
				<h2>HAND-CRAFTED</h2>
				<p>At the heart of the restaurant is the Pastificio where our team creates fresh, hand-made pastas throughout the day, offering a variety of shapes, sizes and textures. Flour is power at Monteverde.</p>
			</div>
		</div>

	</div> 

	);

export default panels ;