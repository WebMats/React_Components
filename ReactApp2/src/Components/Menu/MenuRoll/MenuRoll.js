import React from 'react';

import Css from './MenuRoll.css';

const menuroll = (props) => {


let Menus = null;
	Menus = props.images.map(i => (
						<div
							key={props.images.indexOf(i)}
							style={{backgroundImage: "url(" +  i  + ")"}}
							className={Css.ImageWrapper}
							>
							<div className={Css.OrnamentWrapper} >
								<img src={props.ornaments[props.images.indexOf(i)]} alt="" />
							</div>
							<div className={Css.TextWrapper}>
								<h2>{props.titles[props.images.indexOf(i)]}</h2>
								<pre>C L I C K  T O  V I E W</pre>
							</div>
						</div>
	))
	return (

		<div className={Css.FullWrapper}>
			{Menus}
		</div>
		);

	};

export default menuroll ;