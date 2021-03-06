import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
	selectShop,
	(shop) => shop.collections
);

export const selectShopCollectionsForPreview = createSelector(
	selectShopCollections,
	(collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectUrlCollections = memoize((urlParam) =>
	createSelector(selectShopCollections, (collections) => collections[urlParam])
);
