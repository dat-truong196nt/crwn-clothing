import { cartActionTypes } from "./cart.types"

export const toggleCartHidden = () => ({
	type: cartActionTypes.TOGGLE_CART_HIDEN
})

export const addCartItem = (item) => ({
	type: cartActionTypes.ADD_CART_ITEM,
	payload: item
})