import React from 'react';

import Css from './Carousel.css';




const Carousel = (props) => {

let Carousel = null;
	Carousel = props.items.map(i => (
						<div 
							key={props.items.indexOf(i)}
							style={{backgroundImage: "url(" +  i  + ")"}}
							className = { props.items.indexOf(i) == props.num ?  [Css.Active, Css.CarouselItem].join(" ") : Css.CarouselItem }
							 />
							));


	return Carousel
	
	};

export default Carousel ;
