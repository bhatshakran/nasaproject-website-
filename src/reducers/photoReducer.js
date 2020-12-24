export const photoReducer = (state = [], action) => {
	switch (action.type) {
		case 'FETCH_PHOTOS':
			return { ...state, photos: action.payload };

		default:
			return state;
	}
};
