export const albumsReducer = (state = [], action) => {
	switch (action.type) {
		case 'FETCH_ALBUMS':
			return { ...state, albums: action.payload };

		default:
			return state;
	}
};
