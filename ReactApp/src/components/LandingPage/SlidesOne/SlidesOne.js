import React from 'react';

import Aux from '../../../hoc/Aux/Aux';
import ImgOne from '../../../assets/images/img1.jpg';
import ImgTwo from '../../../assets/images/img2.jpg';
import ImgThree from '../../../assets/images/img3.jpg';

import Css from './SlidesOne.css'


const slideOne = (props) => {

let StyleOne = `${Css.MySlides} ${Css.Fade}`
let StyleTwo = `${Css.MySlides} ${Css.Fade}`
let StyleThree = `${Css.MySlides} ${Css.Fade}`
let DotStyleOne = `${Css.Dot}`
let DotStyleTwo = `${Css.Dot}`
let DotStyleThree = `${Css.Dot}`

if (props.SliderStatus === 1) {
	StyleOne = `${Css.MySlides} ${Css.Fade} ${Css.Display}`
	DotStyleOne = `${Css.Dot} ${Css.Active}`
} else if (props.SliderStatus === 2) {
	StyleTwo = `${Css.MySlides} ${Css.Fade} ${Css.Display}`
	DotStyleTwo = `${Css.Dot} ${Css.Active}`
} else {
	StyleThree = `${Css.MySlides} ${Css.Fade} ${Css.Display}`
	DotStyleThree = `${Css.Dot} ${Css.Active}`
}
	return (
	<Aux >
		<h1 className={Css.HCWH}>HOW CAN WE HELP?</h1>
		<div className={Css.SlideContainer}>

			<div  className={StyleOne}>
				<img src={ImgOne} alt="" />
				<div className={Css.TextBox}>
					<h3>YOUR STYLE OUR SKILLS.</h3>
					<p>Want a cozy retreat? A party palace? A family gathering place? We can design for that ...and a whole lot more.</p>
				</div>
			</div>

			<div  className={StyleTwo}>
				<img src={ImgTwo} alt="" />
				<div className={Css.TextBox}>
					<h3>DESIGN FOR YOUR LIFESTYLE.</h3>
					<p>See your vision come to life, all online, from the comfort of your couch, your business trip of the qrocery store check-out line.</p>
				</div>
			</div>

			<div  className={StyleThree}>
				<img src={ImgThree} alt="" />
				<div className={Css.TextBox}>
					<h3>FUN AT EVERY CLICK.</h3>
					<p>With hundreds of designers and brands, we can find the people and products you nedd to make  your experience an enjoyable one.</p>
				</div>
			</div>
			<a className={Css.Prev} onClick={props.clickedPrev}>&#10094;</a>
			<a className={Css.Next} onClick={props.clickedNext}>&#10095;</a>
		</div>
		<br />
		<div style={{textAlign:'center'}}>
  			<span className={DotStyleOne} onClick={props.SliderOne} ></span> 
  			<span className={DotStyleTwo} onClick={props.SliderTwo} ></span> 
  			<span className={DotStyleThree} onClick={props.SliderThree} ></span> 
		</div>
	</Aux>
	);
	};

export default slideOne ;