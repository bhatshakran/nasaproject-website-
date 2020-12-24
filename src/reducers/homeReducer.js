import _ from 'lodash';

export const homeReducer = (state = {}, action) => {
	switch (action.type) {
		case 'FETCH_APOD':
			return { ...state, ..._.mapKeys(action.payload, 'id') };
		default:
			return state;
	}
};
