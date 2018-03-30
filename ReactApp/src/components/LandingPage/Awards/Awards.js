import React from 'react';
import Ar from '../../../assets/images/ar.png';
import Decor from '../../../assets/images/decor.png';
import Instyle from '../../../assets/images/instyle.png';
import People from '../../../assets/images/people.png';
import Popsugar from '../../../assets/images/popsugar.png';
import Vogue from '../../../assets/images/vogue.png';

import Css from './Awards.css';


const award = (props) => {

	let image = null;
		switch (props.award) {
			case "popsugar":
				image = Popsugar
				break;
			case "people":
				image = People
				break;
			case "instyle":
				image = Instyle
				break;
			case "vogue":
				image = Vogue
				break;
			case "decor":
				image = Decor
				break;
			case "ar":
				image = Ar
				break;
			default: return null;
		}

	return (
		<div className={Css.AwardWrapper}>
			<img src={image} alt="" />
		</div>
		);

	};

export default award ;