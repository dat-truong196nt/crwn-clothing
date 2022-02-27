import { cartActionTypes } from "./cart.types";
import { addCartItemToCart, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
	hidden: true,
	items: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case cartActionTypes.TOGGLE_CART_HIDEN:
			return {
				...state,
				hidden: !state.hidden,
			};
		case cartActionTypes.ADD_CART_ITEM:
			return {
				...state,
				items: addCartItemToCart(state.items, action.payload),
			};
		case cartActionTypes.CLEAN_CART_ITEM:
			return {
				...state,
				items: state.items.filter((item) => item.id !== action.payload.id),
			};
		case cartActionTypes.REMOVE_CART_ITEM:
			return {
				...state,
				items: removeItemFromCart(state.items, action.payload)
			}
		default:
			return state;
	}
};

export default cartReducer;
