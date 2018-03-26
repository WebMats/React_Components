import React from 'react';
import FontAwesome from 'react-fontawesome';

import Aux from '../../../hoc/Aux/Aux';

import Css from './Footer.css';


const footer = (props) => (
	<Aux>
		<div className={Css.TextWrapper}>
			<h4><FontAwesome className={Css.CommentIcon} name='comment-o' /> HAVE A QUESTION?</h4>
			<pre>   FAQ | Chat Now | 888-574-4636</pre>
		</div>
		<div className={Css.Pattern}>
		</div>
	</Aux>
	);

export default footer ;