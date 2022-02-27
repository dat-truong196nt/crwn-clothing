import React from "react";
import { connect } from "react-redux";
import {
	addCartItem,
	cleanCartItem,
	removeCartItem,
} from "../../redux/cart/cart.action";
import "./checkout-item.style.scss";

const CheckoutItem = ({ item, cleanCartItem, removeCartItem, addCartItem }) => {
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={item.imageUrl} alt="item" />
			</div>
			<span className="name">{item.name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => removeCartItem(item)}>
					&#10094;
				</div>
				<span className="value">{item.quantity}</span>
				<div className="arrow" onClick={() => addCartItem(item)}>
					&#10095;
				</div>
			</span>
			<span className="price">{item.price}</span>
			<div onClick={() => cleanCartItem(item)} className="remove-button">
				&#10005;
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	cleanCartItem: (item) => dispatch(cleanCartItem(item)),
	removeCartItem: (item) => dispatch(removeCartItem(item)),
	addCartItem: (item) => dispatch(addCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
