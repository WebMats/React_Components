import React, {Component} from 'react';

import Aux from '../../hoc/Aux/Aux';
import GridDisplay from '../../components/Shop/GridDisplay/GridDisplay';
import Poster from '../../components/Shop/Poster/Poster';
import Footer from '../../components/LandingPage/Footer/Footer';

import Css from './Shop.css';


class Shop extends Component {



	render() {

		return(
			<Aux>
				<div className={Css.FullWrapper}>
					<div className={Css.Title}>
						<h1>SHOP THE LOOK</h1>
						<h3>DESIGNER-CURATED PIECES FOR EVERY STYLE</h3>
					</div>
					<GridDisplay />
				</div>
				<Poster />
				<Footer />
			</Aux>

			);
	}
}

export default Shop ;