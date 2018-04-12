import React, {Component} from 'react';

import Aux from '../../hoc/Aux/Aux';
import Navbar from '../../Components/UI/Navbar/Navbar';
import Panels from '../../Components/RecipePanels/RecipePanels';
import WaterMark from '../../Components/WaterMark/WaterMark';


import Css from './Recipes.css';




const titles = [
		"FUSILLI RUSTICO ALL’ AMATRICIANA",
		"GNOCCHETTI SARDI CON POMODORO",
		"PANTRY SPAGHETTI",
		"PASTA FREDDA WITH SUMMER HERB PESTO"
];

const description = [
		"Serves 4 as a main course or 8 as a mid course",
		"Serves 4-6",
		"Serves 4",
		"Serves 8 as a side dish"
];


class Recipes extends Component {

	render() {

		return (
			<Aux>
				<WaterMark />
				<Navbar />
				<div className={Css.FullWrapper}>
					<h1>RECIPES FROM THE MONTEVERDE KITCHEN</h1>
					<Panels titles={titles} desc={description}  />
				</div>
			</Aux>
			);
	}
}

export default Recipes ;