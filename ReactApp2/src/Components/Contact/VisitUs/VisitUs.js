import React from 'react';

import Css from './VisitUs.css';


const visitUs = (props) => (
	<div className={Css.FullWrapper}>
		<div className={Css.VisitText}>
			<h1>Visit Us</h1>
			<p>1020 WEST MADISON STREET <br /> CHICAGO IL 60607 <br /> (312) 888-3041</p>
			<p>FOR RESERVATION INQUIRIES: <br /><span>RESERVATIONS@MONTEVERDECHICAGO.COM</span></p>
			<p>FOR GENERAL INQUIRIES: <br /><span>TEAMMV@MONTEVERDECHICAGO.COM</span></p>
			<p><span>TUESDAY - FRIDAY</span> <br/>5:00PM - 10:30PM</p>
			<p><span>SATURDAY</span> <br />11:30AM - 10:30PM (LIMITED MENU 2:30-4PM)</p>
			<p><span>SUNDAY</span> <br />11:30AM - 9:00PM (LIMITED MENU 2:30-4PM)</p>
			<button>GET DIRECTIONS</button>
		</div>
		<div className={Css.ImageWrapper}>
			<div className={Css.Private}>
				<h1>PRIVATE EVENTS</h1>
				<p>Monteverde can be privately booked for daytime events, or for your next social or corporate evening function for groups of 70 seated or 100 standing.</p>
				<button>INQUIRE</button>
			</div>
			<div className={Css.Cards}>
				<h1>GIFT CARDS</h1>
				<p>Give the gift of Monteverde! Stop by the restaurant to purchase a gift certificate or send an electronic gift by clicking below.</p>
				<button>BUY NOW</button>
			</div>
		</div>
		<form className={Css.FormWrapper}>
			<h1>KEEP UPDATED WITH MONTEVERDE <br />HAPPENINGS</h1>
			<input type="text" name="fullname" placeholder="Full Name"/>
			<input type="email" name="email" placeholder="EMAIL"/>
			<input type="text" name="mobilephone" placeholder="MOBILE (OPTIOMAL)"/>
			<button>SIGN UP FOR MAILING LIST</button>
		</form>
	</div>


	);

export default visitUs ;