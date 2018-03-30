import React from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

import Css from './AboutUs.css';


const aboutUs = (props) => (
	<Aux>
		<div className={Css.Wrapper}>
			<div className={Css.TextBox}>
				<h1>TOP DESIGN TALENT</h1>
				<p>We hand-vet our interior designers to ensure that you're working with the best of the best. Ready to meet your design match?</p>
				<div className={Css.Button}>
					<Button>GET MATCHED</Button>
				</div>
			</div>
			<div className={Css.Img}></div>
		</div>
		<div className={Css.WrapAboutUs}>
			<h2>ABOUT US</h2>
			<div className={Css.Line} />
			<h4>We're changing the way people design for their homes. No more hours of couch-searching or Saturdays wasted shopping. The designers partner with you to create the best possible version of your space, all online. Then we make it easy to shop by helping you buy everything in one place.</h4>
		</div>
	</Aux>

	);

export default aboutUs ;