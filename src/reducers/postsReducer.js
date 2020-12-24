export const postsReducer = (state = [], action) => {
	switch (action.type) {
		case 'FETCH_POSTS':
			return { ...state, data: action.payload };

		default:
			return state;
	}
};
