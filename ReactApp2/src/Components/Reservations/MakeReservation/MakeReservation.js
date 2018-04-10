import React from 'react';

import Find from '../../../assets/images/reserve_widget.png';
import GiftCard from '../../../assets/images/gift-card.jpg';

import Css from './MakeReservation.css';


const makeReservation = (props) => {




	return(
			<div className={Css.FullWrapper}>
				<div className={Css.Grid}>

					<h1 className={Css.Title}>MAKE A RESERVATION</h1>

					<div className={Css.FindWrapper}>
					<hr />
						<img src={Find} alt=""/>
						<p>For groups of 8 and more, please contact the restaurant directly at <br /> <small className={Css.Email}>reservations@monteverdechicago.com</small></p>
					<hr />
						<h2 style={{width:"90px"}}>HOURS</h2>
						<p>Monday: CLOSED | Tuesday - Friday: 5pm-10:30pm </p>
						<p>Saturday: 11:30am-10:30pm (limited menu 2:30pm-4pm) </p>
						<p>Sunday: 11:30am - 9pm (limited menu 2:30pm-4pm)</p>
						<h2 style={{width:"230px"}}>DATES TO CONSIDER</h2>
						<strong><p>Additional Closures:</p></strong>
						<p>Easter Sunday, April 1<sup>st</sup> 2018</p>
						<p>Wednesday, April 11<sup>th</sup> 2018</p>
					<hr />
						<p>Monteverde always saves room for walk-in guests. Both the patio and bar offer our full <br /> menu and are available on a first come, first served basis.</p>
					<hr />
					</div>

					<div className={Css.CardWrapper}>
						<img src={GiftCard} alt=""/>
					</div>

					<div className={Css.BtnWrapper}>
						<h2>Buy a Gift Card!</h2>
						<h4>Give the gift of Monteverde. Stop by the restaurant to purchase a gift certificate or send an electronic gift by clicking below.</h4>
						<button>BUY NOW</button>
					</div>

				</div>
			</div>
			);
	};

export default makeReservation ;