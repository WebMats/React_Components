import React from 'react';

import Aux from '../../../hoc/Aux/Aux';
import ImgOne from '../../../assets/images/img1-2.jpg';
import ImgTwo from '../../../assets/images/img2-2.jpg';
import ImgThree from '../../../assets/images/img3-2.jpg';
import ImgFour from '../../../assets/images/img4-2.jpg';

import Css from './SlidesTwo.css'


const slideOne = (props) => {

let StyleOne = `${Css.MySlides} ${Css.Fade}`
let StyleTwo = `${Css.MySlides} ${Css.Fade}`
let StyleThree = `${Css.MySlides} ${Css.Fade}`
let StyleFour = `${Css.MySlides} ${Css.Fade}`

if (props.SliderStatus === 1) {
	StyleOne = `${Css.MySlides} ${Css.Fade} ${Css.Display}`
} else if (props.SliderStatus === 2) {
	StyleTwo = `${Css.MySlides} ${Css.Fade} ${Css.Display}`
}  else if (props.SliderStatus === 3) {
	StyleThree = `${Css.MySlides} ${Css.Fade} ${Css.Display}`
} else  {
	StyleFour = `${Css.MySlides} ${Css.Fade} ${Css.Display}`
}
	return (
	<Aux >
		<div className={Css.SlideContainer}>

			<div  className={StyleOne}>
				<img src={ImgOne} alt="" />
				<div className={Css.TextBox}>
					<h3>A COZY BOHO BEDROOM</h3>
					<p>Soothing tones and please-touch textures make for a dreamy night;s sleep.</p>
					<div className={Css.SmallImgOne}></div>
				</div>
			</div>

			<div  className={StyleTwo}>
				<img src={ImgTwo} alt="" />
				<div className={Css.TextBox}>
					<h3>A DREAM KITCHEN MAKEOVER</h3>
					<p>Understatedly cool, this timeless kitchen is made for entertaining</p>
					<div className={Css.SmallImgTwo}></div>
				</div>
			</div>

			<div  className={StyleThree}>
				<img src={ImgThree} alt="" />
				<div className={Css.TextBox}>
					<h3>A GLAM FLORAL NURSERY</h3>
					<p>Statement wallpaper and pretty pastels create a special space for a newborn.</p>
					<div className={Css.SmallImgThree}></div>
				</div>
			</div>

			<div  className={StyleFour}>
				<img src={ImgFour} alt="" />
				<div className={Css.TextBox}>
					<h3>A MID-CENTURY MODERN PATIO</h3>
					<p>It feels like vacay every day on this mod Palm Springs patio</p>
					<div className={Css.SmallImgFour}></div>
				</div>
			</div>
			<a className={Css.Prev} onClick={props.clickedPrev}>&#10094;</a>
			<a className={Css.Next} onClick={props.clickedNext}>&#10095;</a>
		</div>
		<br />
	</Aux>
	);
	};

export default slideOne ;