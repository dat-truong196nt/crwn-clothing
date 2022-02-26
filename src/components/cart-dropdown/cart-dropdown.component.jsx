import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component"
import { connect } from "react-redux";

const Cart = ({items}) => {
	return (
		<div className="cart-dropdown">
			{items && items.map(item => <CartItem key={item.id} {...item}/>)}
			<CustomButton>Go to checkout</CustomButton>
		</div>
	);
};

const mapStateToProp = ({cart: {items}}) =>({items})

export default connect(mapStateToProp)(Cart);