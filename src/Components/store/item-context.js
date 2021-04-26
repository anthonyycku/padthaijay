import { useContext, createContext, useState } from "react";

export const CreateItemContext = createContext();

export function useProvideItem() {
	const [totalItems, setTotalItems] = useState(0);

	return {
		totalItems,
		setTotalItems
	}
}

export function useItem() {
	return useContext(CreateItemContext);
}
