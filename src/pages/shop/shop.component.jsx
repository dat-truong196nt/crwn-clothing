import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import SHOP_DATA from "./shop.data";
import './shop.styles.scss'

class Shoppage extends React.Component {
	constructor() {
		super();
		this.state = {
			collections: SHOP_DATA,
		};
	}

	render() {
		let { collections } = this.state;
		return (
			<div className="shop">
				{collections.map(({ id, ...otherProps }) => (
					<CollectionPreview key={id} {...otherProps} />
				))}
			</div>
		);
	}
}

export default Shoppage;
