import React from 'react';

import Aux from '../../hoc/Aux/Aux';

import Css from './Carousel.css';

import Logo from '../../assets/images/mv_logo.png';
import Arrow from '../../assets/images/arrow.png';



const Carousel = (props) => {

let Carousel = null;
	Carousel = props.items.map(i => (
						<div 
							key={props.items.indexOf(i)}
							style={{backgroundImage: "url(" +  i  + ")"}}
							className = { props.items.indexOf(i) == props.num ?  [Css.Active, Css.CarouselItem].join(" ") : Css.CarouselItem }
							 />
							));


	return (
			<Aux>
				{Carousel}
				<div 
				className={Css.ImgWrapper}
				style={{opacity: props.opacity}}>
					<img src={Logo} alt=""/>
					<img src={Arrow} alt=""/>
				</div>
			</Aux>	
	);
};

export default Carousel ;
