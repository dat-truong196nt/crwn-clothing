import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";

const Cart = ({ items }) => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{items && items.map((item) => <CartItem key={item.id} {...item} />)}
			</div>
			<CustomButton>Go to checkout</CustomButton>
		</div>
	);
};

const mapStateToProp = (state) => ({
	items: selectCartItems(state),
});

export default connect(mapStateToProp)(Cart);
