import React, {Component} from 'react';

import Aux from '../../hoc/Aux/Aux';
import WaterMark from '../../Components/WaterMark/WaterMark';
import Navbar from '../../Components/UI/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

import Css from './Events.css';


class Events extends Component {



	render() {



		return (
			<Aux>
				<WaterMark />
				<Navbar />
				<div className={Css.FullWrapper}>
					<h1>UPCOMING EVENTS</h1>
					<h3>Check Back Soon on our Upcoming Events.</h3>
					<hr/>
				</div>
				<Footer />
			</Aux>
			);
	}
}

export default Events ;