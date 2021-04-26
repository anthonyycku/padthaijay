import React, { useState } from "react";
import classes from "./Menu.module.css";
import Card from "../UI/Card";
import MenuItem from "./MenuItem";

import { useItem } from '../store/item-context'

const items = [
	{
		Name: "Sushi",
		Description: "Finish fish and veggies",
		Price: "22.99",
		amount: 0,
		key: "i1",
	},
	{
		Name: "Krapow Moo",
		Description: "Spicy and Sexy",
		Price: "$1.50",
		amount: 0,
		key: "i2",
	},
	{
		Name: "Fried Chicken",
		Description: "Juicy and Cruchy",
		Price: "2.99",
		amount: 0,
		key: "i3",
	},
	{
		Name: "Papaya Salad",
		Description: "Spicy and Spicy",
		Price: "1.39",
		amount: 0,
		key: "i4",
	},
	{
		Name: "Fried Egg",
		Description: "Crispy AF",
		Price: "0.50",
		amount: 0,
		key: "i5",
	},
];

const Menu = (props) => {
	const [updateItems, setUpdateItems] = useState(items);
	const [sumAmount, setSumAmount] = useState(0);
	const { setTotalItems } = useItem();

	const amountUpdateHandler = (userInputAmount) => {
		const itemIndex = updateItems.findIndex(
			(item) => item.Name === userInputAmount.name
		);
		let updatedItems = [...updateItems];
		updatedItems[itemIndex] = {
			...updatedItems[itemIndex],
			amount: userInputAmount.amount,
		};
		setUpdateItems(updatedItems);

		const totalAmountArray = updatedItems.map((item) => item.amount);
		const sumOfItems = totalAmountArray.reduce((a, b) => a + b);
		setSumAmount(sumOfItems);
		setTotalItems(sumOfItems);
		props.onSumUpdate(sumOfItems);
	};

	return (
		<Card className={classes.menu__container}>
			{items.map((item) => {
				return (
					<MenuItem
						name={item.Name}
						description={item.Description}
						price={`$${item.Price}`}
						amount={item.amount}
						key={item.key}
						onUpdate={amountUpdateHandler}
					></MenuItem>
				);
			})}
		</Card>
	);
};

export default Menu;
