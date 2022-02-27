export const addCartItemToCart = (cartItems, cartItemToAdd) => {
	const existing = cartItems.find(
		(cartItem) => cartItem.id === cartItemToAdd.id
	);
	if (existing) {
		return cartItems.map((cartItem) =>
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	} else {
		return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
	}
};

export const removeItemFromCart = (cartItems, cartItemToRemoved) => {
	const existing = cartItems.find(
		(cartItem) => cartItem.id === cartItemToRemoved.id
	);

	if (existing.quantity === 1)
		return cartItems.filter((item) => item.id !== cartItemToRemoved.id);

	return cartItems.map((item) => {
		if (item.id === cartItemToRemoved.id)
			return {
				...item,
				quantity: item.quantity - 1,
			};
		else return item;
	});
};
