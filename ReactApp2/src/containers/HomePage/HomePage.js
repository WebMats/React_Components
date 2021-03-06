import React, {Component} from 'react';

import Aux from '../../hoc/Aux/Aux';
import Carousel from '../../Components/Carousel/Carousel';
import Navbar from '../../Components/UI/Navbar/Navbar';
import MVdiv from '../../Components/MVdiv/MVdiv';
import Panels from '../../Components/Panels/Panels';
import Footer from '../../Components/Footer/Footer';

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
		mounted: true,
		opacity: 1,
	}

handleChangeSlide = () => {
	if (this.state.mounted && window.pageYOffset < 530) {
	this.state.slideNum >= 7 ? this.setState({slideNum: 0}) : this.setState({slideNum: ++this.state.slideNum})
	setTimeout(this.handleChangeSlide, 5000)
	}
}

handleScroll = (position) => {
	if (this.state.mounted && position < 400) {
	this.setState({opacity: position === 0 ? 1 : (1 - position / 400)})
}
}

// componentDidMount() {
// 	setTimeout( this.state.mounted ? this.handleChangeSlide : null, 5000)
// 	window.onscroll = () => this.handleScroll(window.pageYOffset)
// }

componentWillUnmount() {
	this.state.mounted = false;
}

	render() {

		return (
		<Aux>
			<div className={Css.ImgWrapper}>
				<Carousel 
				num={this.state.slideNum} 
				items={Items}
				opacity={this.state.opacity} />
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