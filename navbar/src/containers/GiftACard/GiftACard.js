import React, {Component} from 'react';

import Aux from '../../hoc/Aux/Aux';
import FormOne from '../../components/GiftACard/FormOne/FormOne';


import Css from './GiftACard.css';


class GiftACard extends Component {



	render() {

		return (
				<Aux>
					<div className={Css.HeaderImg} ></div>
					<FormOne />
				</Aux>
			);
	}
}

export default GiftACard ;