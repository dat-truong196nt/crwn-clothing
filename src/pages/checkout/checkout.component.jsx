import React from "react";
import { connect } from "react-redux";
import {
	selectCartItems,
	selectCartTotal,
} from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import "./checkout.style.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutPage = ({ items, total }) => {
	return (
		<div className="checkout-page">
			<div className="checkout-header">
				<div className="header-block">Product</div>
				<div className="header-block">Description</div>
				<div className="header-block">Quantity</div>
				<div className="header-block">Price</div>
				<div className="header-block">Remove</div>
			</div>
			{items.map((item) => (
				<CheckoutItem key={item.id} {...item} />
			))}
			<div className="total">TOTAL: ${total}</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	items: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
