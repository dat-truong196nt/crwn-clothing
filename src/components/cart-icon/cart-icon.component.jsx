import React from "react";
import "./cart-icon.styles.scss";

import { ReactComponent as ShopIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
	return (
		<div className="cart-icon" onClick={toggleCartHidden}>
			<ShopIcon className="shopping-icon" />
			<span className="item-count">{itemCount}</span>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
	itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
