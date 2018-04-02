import React from 'react';

import Ornament from '../../assets/images/ornament-footer.svg';

import Css from './Footer.css';


const footer = (props) => (
		<div className={Css.FullWrapper}>
			<img src={Ornament} alt=""/>
			<h4>1020 WEST MADISON STREET</h4>
			<h4>CHICAGO IL 60607</h4>
			<h4>(312) 888-3041</h4>
			<h4>TEAMMV@MONTEVERDECHICAGO.COM</h4>
			<div>
				<pre>FACEBOOK | TWITTER | INSTAGRAM</pre>
			</div>
			<small>{String.fromCharCode(169)} 2015-2016 TEXAHS LLC. ALL RIGHTS RESERVED.</small>
			<hr/>
			<small>THE DESIGN OF OUR RESTAURANT, INCLUDING THE BAR AND PASTIFICO, IS A TRADEMARK OF TEXAHS LLC AND IS ©2015 TEXAHS LLC, ALL RIGHTS RESERVED.</small>
		</div>

	);

export default footer ;