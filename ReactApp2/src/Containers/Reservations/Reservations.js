import React, {Component} from 'react';

import Aux from '../../hoc/Aux/Aux';
import Navbar from '../../Components/UI/Navbar/Navbar';
import MakeReservation from '../../Components/Reservations/MakeReservation/MakeReservation';
import Footer from '../../Components/Footer/Footer';
import WaterMark from '../../Components/WaterMark/WaterMark';


class Reservations extends Component {



	render() {



		return (
		<Aux>
			<WaterMark />
			<Navbar />
			<MakeReservation />
			<Footer />
		</Aux>
			);
	}
}

export default Reservations ;