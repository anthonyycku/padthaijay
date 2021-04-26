//Component CSS
import React, { useState } from "react";
import classes from "./App.module.css";

//import component modules
import NavigationBar from "./Components/MainHeader/NavigationBar";
import Card from "./Components/UI/Card";
import Menu from "./Components/Menu/Menu";
import { useProvideItem, CreateItemContext } from "./Components/store/item-context"

function App() {
	const itemState = useProvideItem();
	const [sumAmountUpdate, setSumAmountUpdate] = useState(0);

	const sumUpdateHandler = (sum) => {
		setSumAmountUpdate(sum)
	};

	return (
		<CreateItemContext.Provider value={itemState}>
			<NavigationBar />
			<Card className={classes.welcome_card}>
				<h2>Delicious Food, Delivered To You</h2>
				<p>
					Choose your favourite meal from our broad selection of available meals
					and nejou a delicious lunch or dinner at home.
					<br />
					All our meals are cooked with high quality ingredients, just in time
					and of course by exprienced chefs
				</p>
			</Card>
			<Menu onSumUpdate={sumUpdateHandler}></Menu>
		</CreateItemContext.Provider>
	);
}

export default App;
