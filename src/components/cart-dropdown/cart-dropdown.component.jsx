import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { useNavigate } from "react-router";
import { toggleCartHidden } from "../../redux/cart/cart.action";

const Cart = ({ items, dispatch }) => {
	const navigate = useNavigate();
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{items && items.map((item) => <CartItem key={item.id} {...item} />)}
			</div>
			<CustomButton onClick={() => dispatch(toggleCartHidden()) && navigate('/checkout')}>Go to checkout</CustomButton>
		</div>
	);
};

const mapStateToProp = (state) => ({
	items: selectCartItems(state),
});

export default connect(mapStateToProp)(Cart);
