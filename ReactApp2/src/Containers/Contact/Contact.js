import React, {Component} from 'react';

import Aux from '../../hoc/Aux/Aux';
import WaterMark from '../../Components/WaterMark/WaterMark';
import Navbar from '../../Components/UI/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import VisitUs from '../../Components/Contact/VisitUs/VisitUs';



class Contact extends Component {



	render() {



		return (
			<Aux>
				<WaterMark />
				<Navbar /> 
				<VisitUs />
				<Footer />
			</Aux>

			);
	}
}

export default Contact ;