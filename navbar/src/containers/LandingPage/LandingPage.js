import React, {Component} from 'react';

import Aux from '../../hoc/Aux/Aux';
import Header from '../../components/LandingPage/Header/Header';


class LandingPage extends Component {
	state = {
		width: 1,
		height: 1
	}

updateDimensions = () => {
	let newWidth = (window.innerWidth) / 1000;
	if (window.innerWidth < 1000) {
        this.setState({width: newWidth});
    } else {
  
    	this.setState({width: 1});
    }
   };

componentDidMount = () => {
        window.addEventListener("resize", this.updateDimensions);
    };

componentWillUnmount = () => {
	window.removeEventListener('resize', this.updateDimensions);
}

	render() {
		return(
			<Aux>
				<Header width={this.state.width} />
			</Aux>)
	}
}

export default LandingPage;