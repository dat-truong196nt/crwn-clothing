import React from "react";
import "./shop.styles.scss";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import { convertCollectionSnapshotToMap, firestore } from "../../assets/api/firebase.api";
import { connect } from "react-redux";
import { setShopCollections } from "../../redux/shop/shop.actions";

class Shoppage extends React.Component {
	unsubscribeFromSnapshot = null;

	componentDidMount() {
		console.log('rerender')
		const collectionRef = firestore.collection('collections')
		collectionRef.onSnapshot(snapshot => {
			this.props.setShopCollections(convertCollectionSnapshotToMap(snapshot))
		})
	}
	render() {
		return (
			<div className="shop">
				<CollectionOverview />
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	setShopCollections: collections => dispatch(setShopCollections(collections))
})

export default connect(null, mapDispatchToProps)(Shoppage);
