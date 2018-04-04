import React, {Component} from 'react';

import Aux from '../../hoc/Aux/Aux';
import Carousel from '../../components/Carousel/Carousel';
import Navbar from '../../components/UI/Navbar/Navbar';
import MVdiv from '../../components/MVdiv/MVdiv';
import Panels from '../../components/Panels/Panels';
import Footer from '../../components/Footer/Footer';

import Css from './HomePage.css';

import Item1 from '../../assets/images/carousel-item-1.jpg'
import Item2 from '../../assets/images/carousel-item-2.jpg'
import Item3 from '../../assets/images/carousel-item-3.jpg'
import Item4 from '../../assets/images/carousel-item-4.jpg'
import Item5 from '../../assets/images/carousel-item-5.jpg'
import Item6 from '../../assets/images/carousel-item-6.jpg'
import Item7 from '../../assets/images/carousel-item-7.jpg'
import Item8 from '../../assets/images/carousel-item-8.jpg'


let Items = [Item1,Item2 ,Item3 ,Item4 ,Item5 ,Item6 ,Item7 ,Item8]

class HomePage extends Component {
	state={
		slideNum: 0,
		mounted: true
	}

// handleChangeSlide = () => {
// 	if (this.state.mounted) {
// 	this.state.slideNum >= 7 ? this.setState({slideNum: 0}) : this.setState({slideNum: ++this.state.slideNum})
// 	setTimeout(this.handleChangeSlide, 5000)
// 	}
// }

// componentDidMount() {
// 	this.setState({mounted: true})
// 	setTimeout(this.handleChangeSlide, 5000)
// }

// componentWillUnmount() {
// 	this.state.mounted = false;
// }

	render() {

		return (
		<Aux>
			<div className={Css.ImgWrapper}>
				<Carousel num={this.state.slideNum} items={Items} />
			</div>
			<div className={Css.NavbarWrapper}>
				<Navbar />
			</div>
			<MVdiv />
			<Panels />
			<Footer />
		</Aux>
			);
	}
}

export default HomePage ;