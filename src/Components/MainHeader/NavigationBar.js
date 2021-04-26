import React, { useContext, useEffect } from "react";
import classes from "./NavigationBar.module.css";
import CartSvg from "../icon/CartSvg";

import { useItem } from '../store/item-context'


const NavigationBar = () => {
	const { totalItems } = useItem();


	return (
		<div className={classes.navbar__container}>
			<div className={classes.navbar__logo}>
				<h2>ReactMeals</h2>
			</div>
			<div className={classes.navbarCart__container}>
				<div className={classes.navbarCart__content}>
					<CartSvg className={classes.cartIcon} />
					<p>Your Cart</p>
					<div>({totalItems})</div>
				</div>
			</div>
		</div>
	);
};

export default NavigationBar;
