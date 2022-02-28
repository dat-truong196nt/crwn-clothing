import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectUrlCollections } from "../../redux/shop/shop.selector";
import "./collection.style.scss";

const CollectionPage = () => {
	const params = useParams();
	const collection = useSelector(state => selectUrlCollections(params.collectionId)(state))
	console.log({collection})
	return <div className="collection">CATEGORY</div>;
};

export default CollectionPage;
