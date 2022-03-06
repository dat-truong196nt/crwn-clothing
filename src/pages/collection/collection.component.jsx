import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectUrlCollections } from "../../redux/shop/shop.selector";
import {
	CollectionPageContainer,
	ItemContainer,
	TitleContainer,
} from "./collection.style";
// import "./collection.style.scss";

const CollectionPage = () => {
	const params = useParams();
	const { tittle, items } = useSelector((state) =>
		selectUrlCollections(params.collectionId)(state)
	);
	return (
		<CollectionPageContainer>
			<TitleContainer>{tittle}</TitleContainer>
			<ItemContainer>
				{items.map((item) => (
					<CollectionItem key={item.id} {...item} />
				))}
			</ItemContainer>
		</CollectionPageContainer>
	);
};

export default CollectionPage;
