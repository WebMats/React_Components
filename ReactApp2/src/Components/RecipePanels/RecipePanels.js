import React from 'react';

import Css from './RecipePanels.css';


const panels = (props) => {

const par = <p className={Css.Par}>Make the pasta featured in</p>

let panels = null;

if (props.titles && props.desc) {
	panels = props.titles.map(i => (
		<div className={Css.PanelWrapper} key={props.titles.indexOf(i)}>
			<h2>{i}</h2>
			<p>{props.desc[props.titles.indexOf(i)]}</p>
			{props.titles.indexOf(i) === 2 ? par : null }
			<button>GET THE RECIPE</button>
		</div>
	))
}

return panels

}

export default panels ;