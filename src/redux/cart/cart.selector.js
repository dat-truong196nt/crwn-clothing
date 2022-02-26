import { createSelector } from "selector";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(selectCart, (cart) => cart.items);

export const selectCartItemsCount = createSelector(selectCartItems, (items) =>
	items.reduce((acc, item) => acc + item.quantity, 0)
);
