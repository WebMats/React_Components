import React from 'react';

import CalendarInput from '../../UI/CalendarInput/CalendarInput';

import Css from './FormTwo.css';


const formTwo = (props) => {

	return(
	<div className={Css.FullWrapper}>
		<section>
			<form>
				<h1>2</h1>
				<div className={Css.Inputs}>
					<h2>TO:</h2>
					<label htmlFor="fullname">Recipient's Full Name</label>
					<input type="text" name="recfullname"/>
					<label htmlFor="email">Recipient's Email</label>
					<input type="recemail" name="email" />
				<div className={Css.DeliveryDate}>
					<label htmlFor="deliverydate">SELECT A DELIVERY DATE</label>
					<CalendarInput 
						format={props.format}
						value = {props.value}
						defaultValue={props.defaultValue}
						disabledDate={props.disabledDate}
						change={props.change}
						 />
				</div>
				</div>
			</form>
		</section>
	</div>
	)
	};

export default formTwo ;