import React from 'react';

import Button from '../../UI/Button/Button';

import Css from './FormThree.css';


const formThree = (props) => (

	<div className={Css.FullWrapper}>
		<section>
			<form>
				<h1>3</h1>
				<div className={Css.Inputs}>
					<h2>FROM:</h2>
					<label htmlFor="usrname">Your Name</label>
					<input type="text" name="fullname"/>
					<label htmlFor="usremail">Your Email</label>
					<input type="email" name="email" />
					<label htmlFor="">Note From You</label>
					<textarea></textarea>
				</div>
				<div className={Css.Button}>
					<Button>PURCHASE GIFT CARD</Button>
				</div>
			</form>
		</section>
	</div>

	);

export default formThree ;