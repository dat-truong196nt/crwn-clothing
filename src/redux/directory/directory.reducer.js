/* Used as starting data for Directory */

import { SECTION_DATA } from "./directory.data";

const INITIAL_DIRECTORY_STATE = {
	sections: SECTION_DATA
};

const directoryReducer = (state = INITIAL_DIRECTORY_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default directoryReducer;
