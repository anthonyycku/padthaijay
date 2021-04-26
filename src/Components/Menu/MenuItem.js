import React, { useState } from "react";
import classes from "./MenuItem.module.css";
import Button from "../UI/Button";

const MenuItem = (props) => {
	const [addItem, setAddItem] = useState(0);

	const submitItemHandler = (event) => {
		event.preventDefault();
		isNaN(addItem) ? setAddItem(1) : setAddItem(addItem + 1);

		console.log({
			name: props.name,
			amount: addItem + 1,
		});

		props.onUpdate({
			name: props.name,
			amount: addItem + 1,
		});
	};

	const amountChangeHandler = (event) => {
		setAddItem(parseInt(event.target.value));
	};

	return (
		<div className={classes.menu__content}>
			<div className={classes.menu__item}>
				<h3>{props.name}</h3>
				<p>{props.description}</p>
				<p>{props.price}</p>
			</div>
			<form className={classes.menu__amount}>
				<div className={classes.amount__display}>
					<label htmlFor={"amount__input"}>Amount</label>
					<input
						id={"amount__input"}
						className={classes.dynamic_amount}
						type="number"
						min="0"
						max="50"
						value={addItem}
						onChange={amountChangeHandler}
					/>
				</div>
				<Button type="submit" onClick={submitItemHandler}>
					+Add
				</Button>
			</form>
		</div>
	);
};

export default MenuItem;
