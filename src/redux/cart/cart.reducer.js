import { cartActionTypes } from "./cart.types";
import { addCartItemToCart } from "./cart.utils";

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
				items: addCartItemToCart(state.items, action.payload)
			}
		default:
			return state;
	}
};

export default cartReducer;
