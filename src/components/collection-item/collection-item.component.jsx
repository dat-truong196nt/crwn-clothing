import React from "react";
import { connect } from "react-redux";
import { addCartItem } from "../../redux/cart/cart.action";
import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.styles.scss";

const CollectionItem = ({ id, name, price, imageUrl, addCartItem }) => {
	return (
		<div key={id} className="collection-item">
			<div
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
				className="image"
			></div>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">${price}</span>
			</div>
			<CustomButton
				onClick={() => addCartItem({ id, name, price, imageUrl, quantity: 1 })}
				inverted={null}
			>
				Add to cart
			</CustomButton>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addCartItem: (item) => dispatch(addCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
