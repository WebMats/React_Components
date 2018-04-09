import React, {Component} from 'react';

import Aux from '../../hoc/Aux/Aux';
import WaterMark from '../../Components/WaterMark/WaterMark';
import Navbar from '../../Components/UI/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';


import Css from './Careers.css';


class Careers extends Component {



	render() {

		return (
		<Aux>
			<WaterMark />
			<Navbar />
			<div className={Css.FullWrapper}>
				<div className={Css.ImgWrapper}>
					<h2>C A R E E R S</h2>
					<h4>MONTEVERDE IS ALWAYS LOOKING FOR SKILLED, <br /> PASSIONATE, HARD WORKING INDIVIDUALS TO JOIN THE TEAM.</h4>
					<em><p>If you are interested in working at a bustling, fun, casual Italian restaurant <br/> in the heart of Chicago’s West Loop, please apply here:</p></em>
					<button className={Css.Btn}>APPLY HERE</button>
				</div>
			</div>
			<Footer />
		</Aux>
			);
	}
}

export default Careers ;