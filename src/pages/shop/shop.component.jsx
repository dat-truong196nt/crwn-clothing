import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { createStructuredSelector } from "reselect";
import "./shop.styles.scss";
import { selectShopCollections } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";

const Shoppage = ({ collections }) => {
	return (
		<div className="shop">
			{collections.map(({ id, ...otherProps }) => (
				<CollectionPreview key={id} {...otherProps} />
			))}
		</div>
	);
};

const mapStateToProps = (state) =>
	createStructuredSelector({
		collections: selectShopCollections,
	});

export default connect(mapStateToProps)(Shoppage);
