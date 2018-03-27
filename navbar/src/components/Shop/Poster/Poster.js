import React from 'react';

import Button from '../../UI/Button/Button';

import Css from './Poster.css';


const poster = (props) => (
		<div className={Css.PosterWrapper}>
			<div className={Css.Tag}>
				<h1>AS LOW AS</h1>
				<h2><sup>$</sup>79</h2>
			</div>
			<h3>GET THE PERFECT LOOK WITH OUR HELP!</h3>
			<p>Not sure how to make all of your pieces work together? Our network of interior designers can help transform your space, all online, for a low fee.</p>
				<div className={Css.Button}>
					<Button>START MY PROJECT</Button>
				</div>
			
		</div>

	);

export default poster ;