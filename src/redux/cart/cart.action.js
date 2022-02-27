import { cartActionTypes } from "./cart.types"

export const toggleCartHidden = () => ({
	type: cartActionTypes.TOGGLE_CART_HIDEN
})

export const addCartItem = (item) => ({
	type: cartActionTypes.ADD_CART_ITEM,
	payload: item
})

export const cleanCartItem = item => ({
	type: cartActionTypes.CLEAN_CART_ITEM,
	payload: item
})

export const removeCartItem = item => ({
	type: cartActionTypes.REMOVE_CART_ITEM,
	payload: item
})