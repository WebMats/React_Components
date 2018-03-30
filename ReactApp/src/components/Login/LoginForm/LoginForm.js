import React from 'react';
import FontAwesome from 'react-fontawesome';

import Button from '../../UI/Button/Button';

import Css from './LoginForm.css';


const loginForm = (props) => (
		<div className={Css.LoginFormWrapper}>

			<div className={Css.FacebookGreeting}>
				<h2>WELCOME BACK!</h2>
				<div className={Css.Button}>
					<Button><FontAwesome className={Css.FacebookIcon} name="facebook"/> LOG IN WITH FACEBOOK</Button>
				</div>
			</div>
			<hr />
			<div className={Css.ORWrapper}>
					<h5>OR</h5>
			</div>
			<div className={Css.Inputs}>
				<label htmlFor="email">Email</label>
				<input type="email" name="email" />
				<div className={Css.PasswordAssists}>
					<label htmlFor="password">Password</label> 
					<small>Forgot Your Password?</small>
				</div>
				<input type="password" name="password" />
			</div>
			<div className={Css.Checkbox}>
				<input type="checkbox"/>
				<label htmlFor=""> Remenber me</label>
			</div>
			<div className={Css.BtnLogin}>
				<Button>LOG IN</Button>
			</div>
			<div className={Css.CreateAccountWrapper}>
				<hr/>
				<h2>NEW HERE?</h2>
				<p>Don't have an account?</p>
			</div>
		</div>

	);

export default loginForm ;