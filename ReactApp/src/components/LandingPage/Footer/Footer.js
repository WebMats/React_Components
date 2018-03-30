import React from 'react';

import Decor from '../../../assets/images/decor-footer.png';
import AD from '../../../assets/images/AD-footer.svg';
import TNYT from '../../../assets/images/TNYT-footer.png';
import Vogue from '../../../assets/images/vogue-footer.png';
import Today from '../../../assets/images/today-footer.png';
import Facebook from '../../../assets/images/facebook.png';
import Instagram from '../../../assets/images/instagram.png';
import Twitter from '../../../assets/images/twitter.png';
import Pinterest from '../../../assets/images/pinterest.png';
import Phone from '../../../assets/images/phone-footer.png';

import Button from '../../UI/Button/Button';

import Css from './Footer.css';




const footer = (props) => {

	return (
		<div className={Css.FooterWrapper}>

			<div className={Css.LogoWrapper}> 
				<img src={Decor} alt="" />
				<img src={AD} alt="" />
				<img src={TNYT} alt="" />
				<img src={Vogue} alt="" />
				<img src={Today} alt="" />
			</div>

			<div className={Css.FollowUs}>
				<h2>Follow Us Here and Here</h2>
				<div className={Css.Social}>
					<img src={Facebook} alt="" />
					<img src={Twitter} alt="" />
					<img src={Instagram} alt="" />
					<img src={Pinterest} alt="" />
				</div>
			</div>

			<div className={Css.LetterWrapper}>
				<h2>Our Newsletter</h2>
				<div className={Css.Search}>
					<input type="email" name="email" placeholder="Sign up! Enter Your Email" />
					<div className={Css.Button}>
						<Button>&#10095;</Button>
					</div>
				</div>
				<small>Join over 200,000 people</small>
			</div>

			<div className={Css.ChatWrapper}>
				<h2>Want to Chat?</h2>
				<div className={Css.PhoneWrap}>
					<img src={Phone} alt=""/>
					<p>Schedule a phone consult</p>
					<p>or give us a call at</p>
					<p>888 - 574 - 4636</p>
				</div>
			</div>

		</div>
		);
	};

export default footer ;