import React from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Awards from '../Awards/Awards';
import Button from '../../UI/Button/Button';
import HeaderImg from '../../../assets/images/living-room.jpg';


import Css from './Header.css';

const header = (props) => {
	let divStyle = {
		transform: 'scale(' + props.width + ')'
	}


	return (
		<Aux>
			<div  className={Css.MobileTextBox}> 
					<h1 className={Css.TitleMobile}>EASY. FUN. AFFORDABLE</h1>
					<p className={Css.ParMobile}>Partner with a designer online to create your dream space.</p>
					<div className={Css.BtnMobile}>
						<Button>START DESIGNING</Button>
					</div>
				</div>

			<div className={Css.ImgWrapper}>
				<img className={Css.Img} src={HeaderImg} alt="" />

				<div style={divStyle} className={Css.TextBox}> 
					<h1 className={Css.Title}>EASY. FUN. AFFORDABLE</h1>
					<p className={Css.Par}>Partner with a designer online to create your dream space.</p>
					<div className={Css.Btn}>
						<Button>START DESIGNING</Button>
					</div>
				</div>
			</div>
			<div className={Css.Awards}>
				<Awards award={"popsugar"} />
				<Awards award={"people"} />
				<Awards award={"instyle"} />
				<Awards award={"vogue"} />
				<Awards award={"decor"} />
				<Awards award={"ar"} />
			</div>
		</Aux>
		);

	};

export default header ;