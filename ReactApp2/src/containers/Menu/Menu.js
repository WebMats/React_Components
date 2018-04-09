import React, {Component} from 'react';

import Aux from '../../hoc/Aux/Aux';
import Navbar from '../../Components/UI/Navbar/Navbar';
import MenuRoll from '../../Components/Menu/MenuRoll/MenuRoll';
import Footer from '../../Components/Footer/Footer';
import WaterMark from '../../Components/WaterMark/WaterMark';

import Lunch from '../../assets/images/menu-lunch.jpg';
import Dinner from '../../assets/images/menu-dinner.jpg';
import Drinks from '../../assets/images/menu-drinks.jpg';
import Wine from '../../assets/images/menu-wine.jpg';
import Dessert from '../../assets/images/menu-dessert.jpg';
import Gluten from '../../assets/images/menu-gluten-free_new.jpg';
import OrnamentOne from '../../assets/images/ornament-1.svg'
import OrnamentTwo from '../../assets/images/ornament-2.svg'
import OrnamentThree from '../../assets/images/ornament-3.svg'
import OrnamentFour from '../../assets/images/ornament-4.svg'
import OrnamentFive from '../../assets/images/ornament-5.svg'


let Menus = [Lunch, Dinner, Drinks, Wine, Dessert, Gluten]
let Ornaments = ["", OrnamentOne, OrnamentTwo, OrnamentThree, OrnamentFour, OrnamentFive]
let Titles = ["L U N C H", "D I N N E R", "D R I N K S", "W I N E", "D E S S E R T", "G L U T E N - F R E E"]

class Menu extends Component {

	render() {

		return (
		<Aux>
			<WaterMark />
			<Navbar />
			<MenuRoll images={Menus} ornaments={Ornaments} titles={Titles} />
			<Footer />
		</Aux>
			);
	}
}

export default Menu;