import React from 'react';


import Css from './FormOne.css';


const formOne = (props) => {



return (
	<div className={Css.FullWrapper}>
		<section>
			<h1>GIVE THE GIFT OF HOME</h1>
			<p>Laurel & Wolf gift cards can be applied toward online interior design packages, furniture or both! Feeling generous? Gift a special someone credit for an entire room’s worth of furniture. We send your gift via email and you can print out an adorable foldable 3D house to gift as well.</p>
		</section>
		<section>
			<form>
				<h1>1</h1>
				<div className={Css.AmountWrapper}>
					<h2>How Much Would You Like To Give?</h2>
				
						<label htmlFor="amount">Enter an Amount:</label>
						<div className={Css.AmountInput}>
						<h2>$</h2>
						<input name="amount" type="text"/>
						<h2>.00</h2>
					</div>

					<div className={Css.SelectorWrapper}>
						<label htmlFor="chosenamount">
							<strong>OR </strong>choose an amount:
						</label>
						<select name="chosenamount" id="amountselector">
							<option>Select</option>
							<option>$79</option>
							<option>$149</option>
							<option>$249</option>
							<option>$500</option>
							<option>$1000</option>
							<option>$2000</option>
							<option>$3000</option>
						</select>
					</div>

				</div>
			</form>
		</section>
		<section className={Css.SuggestionWrapper}>
			<h3>SUGGESTED GIFT AMOUNTS</h3>
			<p>&#8226; Our design packages are $79 Light, $149 Classic and $249 Signature. Learn More.</p>
			<p>&#8226; Gift cards can be applied towards the purchase of design packages, furniture and décor.</p>
			<p>&#8226; Want to gift interior design + a room full of furniture? We'd suggest giving $1000 for a design refresh and $5000+ for a full room overhaul.</p>
		</section>
	</div>
	)

	};

export default formOne ;