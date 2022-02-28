import React from "react";
import { connect } from "react-redux";
import { selectShopCollectionsForPreview } from "../../redux/shop/shop.selector";
import "./collection-overview.style.scss";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { createStructuredSelector } from "reselect";

const CollectionOverview = ({ collections }) => (
	<div className="collection-overview">
		{collections.map(({ id, ...otherProps }) => (
			<CollectionPreview key={id} {...otherProps} />
		))}
	</div>
);

const mapStateToProps = (state) =>
	createStructuredSelector({ collections: selectShopCollectionsForPreview });

export default connect(mapStateToProps)(CollectionOverview);
