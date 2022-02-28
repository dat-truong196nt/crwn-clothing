import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import CollectionItem from "../../components/collection-item/collection-item.component"
import { selectUrlCollections } from "../../redux/shop/shop.selector";
import "./collection.style.scss";

const CollectionPage = () => {
	const params = useParams();
	const { tittle, items } = useSelector((state) =>
		selectUrlCollections(params.collectionId)(state)
	);
	return (
		<div className="collection-page">
			<h3 className="tittle">{tittle}</h3>
			<div className="items">
				{items.map((item) => (
					<CollectionItem key={item.id} {...item} />
				))}
			</div>
		</div>
	);
};

export default CollectionPage;
