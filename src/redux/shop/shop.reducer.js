import { shopActionTypes } from "./shop.types";

const INITIAL_SHOP_STATE = {
	collections: null,
};

const shopReducer = (state = INITIAL_SHOP_STATE, action) => {
	switch (action.type) {
		case shopActionTypes.SET_SHOP_COLLECTIONS:
			return {
				...state,
				collections: action.payload
			}
		default:
			return state;
	}
};

export default shopReducer;
