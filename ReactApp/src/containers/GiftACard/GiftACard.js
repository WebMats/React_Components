import React, {Component} from 'react';
import moment from 'moment';
import 'moment/locale/en-gb';

import Aux from '../../hoc/Aux/Aux';
import FormOne from '../../components/GiftACard/FormOne/FormOne';
import FormTwo from '../../components/GiftACard/FormTwo/FormTwo';
import FormThree from '../../components/GiftACard/FormThree/FormThree';
import Footer from '../../components/GiftACard/Footer/Footer';

import Css from './GiftACard.css';


class GiftACard extends Component {
	state = {
		date: {
			format: 'dd MMM DD YYYY'
		},
		value: null,
		defaultValue: null
	}

componentDidMount = () => {
	const now = moment();
	now.locale('en-gb').utcOffset(0);
	this.setState({defaultValue: now.clone(), value: now})
}
disabledDate = (current) => {
	if (!current) {
		return false;
	}
	const date = moment();
	return current.valueOf() < date.valueOf();
}
handleChange = (value) => {
    this.setState({value: value});
  }


	render() {

		return (
				<Aux>
					<div className={Css.HeaderImg} ></div>
					<FormOne />
					<FormTwo
						format={this.state.date.format}
						value = {this.state.value}
						defaultValue={this.state.defaultValue}
						disabledDate={this.disabledDate}
						change={this.handleChange}
						 />
					<FormThree />
					<Footer />
				</Aux>
			);
	}
}

export default GiftACard ;