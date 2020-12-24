import _ from 'lodash';

export const projectsReducer = (state = {}, action) => {
	switch (action.type) {
		case 'FETCH_IMAGERY':
			return { ...state, ..._.mapKeys(action.payload, 'id') };

		default:
			return state;
	}
};
