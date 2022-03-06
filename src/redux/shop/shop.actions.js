import { shopActionTypes } from "./shop.types";

export const setShopCollections = collections => ({
	type: shopActionTypes.SET_SHOP_COLLECTIONS,
	payload: collections
})