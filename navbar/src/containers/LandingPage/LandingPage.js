import React, {Component} from 'react';

import Aux from '../../hoc/Aux/Aux';
import Header from '../../components/LandingPage/Header/Header';
import IpadSection from '../../components/LandingPage/IpadSection/IpadSection';
import SlideOne from '../../components/LandingPage/SlidesOne/SlidesOne';
import SlideTwo from '../../components/LandingPage/SlidesTwo/SlidesTwo';


class LandingPage extends Component {
	state = {
		width: window.innerWidth > 1000 ? null : window.innerWidth / 1000,
		height: 1,
		SlideTo: 1,
		SlideToTwo: 1
	}


HandleSlider = (n) => {
	this.setState({SlideTo:n})
}

updateDimensions = () => {
	let newWidth = (window.innerWidth) / 1000;
	if (window.innerWidth < 1000) {
        this.setState({width: newWidth});
    } else {
    	this.setState({width: 1});
    }
   }

componentDidMount = () => {
        window.addEventListener("resize", this.updateDimensions);
        // this.HandleSlideProgression();
    }

// HandleSlideProgression = () => {
// 	if (this.state.SlideTo === 0 ) {
// 		this.setState({SlideTo: 1})
// 	} else if (this.state.SlideTo === 1 ) {
// 		this.setState({SlideTo: 2})
// 	} else if (this.state.SlideTo === 2) {
// 		this.setState({SlideTo: 3})
// 	} else {
// 		this.setState({SlideTo: 1})
// 	}
// 	setTimeout(this.HandleSlideProgression, 9000);
// }
HandlePrevNext = (n) => {
	if (this.state.SlideTo === 1 && n === -1) {
		this.setState({SlideTo:3})
	} else if (this.state.SlideTo === 3 && n === 1) {
		this.setState({SlideTo:1})
	} else {
		this.setState({SlideTo: this.state.SlideTo + n})
	}
}
HandlePrevNextTwo = (n) => {
	if (this.state.SlideToTwo === 1 && n === -1) {
		this.setState({SlideToTwo:4})
	} else if (this.state.SlideToTwo === 4 && n === 1) {
		this.setState({SlideToTwo:1})
	} else {
		this.setState({SlideToTwo: this.state.SlideToTwo + n})
	}
}

componentWillUnmount = () => {
	window.removeEventListener('resize', this.updateDimensions);
}

	render() {
		return(
			<Aux>
				<Header width={this.state.width} />
				<SlideOne 
				clickedPrev={() => this.HandlePrevNext(-1)}
				clickedNext={() => this.HandlePrevNext(1)}
				SliderOne={() => this.HandleSlider(1)}
				SliderTwo={() => this.HandleSlider(2)}
				SliderThree={() => this.HandleSlider(3)}
				SliderStatus={this.state.SlideTo}
				width = {this.state.width}
				/>
				<IpadSection />
				<SlideTwo
				clickedPrev={() => this.HandlePrevNextTwo(-1)}
				SliderStatus={this.state.SlideToTwo}
				clickedNext={() => this.HandlePrevNextTwo(1)}
				width = {this.state.width}
				/>
			</Aux>
			)
	}
}

export default LandingPage;