import React from 'react';
import FontAwesome from 'react-fontawesome'

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';
import Img1 from '../../../assets/images/sm-img1.jpg';
import Img2 from '../../../assets/images/sm-img2.jpg';
import Img3 from '../../../assets/images/sm-img3.jpg';
import Img4 from '../../../assets/images/sm-img4.jpg';

import Css from './InstaSec.css';


const instasec = (props) => (

	<Aux>
		<div className={Css.WrapInstaText}>
			<h2><FontAwesome className={Css.InstaIcon} name='instagram'/>GET INSPIRED ON INSTAGRAM!</h2>
			<p>Follow along for daily inspiration, and share your favorite rooms with #laurelandwolf.</p>
			<h3>SEE OUR INSTAGRAM &rarr;</h3>
		</div>
		<div className={Css.WrapImg}>
			<img className={Css.DivImgOne} src={Img1} alt="" />
			<img className={Css.DivImgTwo} src={Img2} alt="" />
			<img className={Css.DivImgThree} src={Img3} alt="" />
			<img className={Css.DivImgFour} src={Img4} alt="" />
		</div>
		<div className={Css.WrapBtn}>
			<h1>READY TO START YOUR PROJECT?
				<div className={Css.Button}>
					<Button>LET'S GO</Button>
				</div>
			</h1>
		</div>
	</Aux>


	);

export default instasec ;