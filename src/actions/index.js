import nasa from '../api';
import axios from 'axios';

export const SignIn = userId => {
	return {
		type: 'SIGN_IN',
		payload: userId,
	};
};

export const SignOut = () => {
	return {
		type: 'SIGN_OUT',
	};
};

const api = `${process.env.REACT_APP_NASA_API_KEY}`;

// action creaters

export const getApod = () => {
	return async dispatch => {
		const response = await nasa.get(`/planetary/apod/?api_key=${api}`);
		dispatch({ type: 'FETCH_APOD', payload: response.data });
	};
};

export const getImagery = (long, lat) => {
	return async dispatch => {
		const response = await nasa.get(
			`/planetary/earth/imagery/?lon=${long}&lat=${lat}&api_key=${api}`
		);
		dispatch({ type: 'FETCH_IMAGERY', payload: response.data });
		console.log(response);
	};
};

export const getImage = term => {
	return async dispatch => {
		const response = await axios.get(
			`https://api.unsplash.com/search/photos?query=${term}&client_id=9I_jO2ePieFwlgQ_aA2hqxKJkZA-eRriQkMu-U7yxFw`
		);
		dispatch({ type: 'FETCH_IMAGE', payload: response.data.results });
		// console.log(response.data);
	};
};

// get posts fro jsontypicode
export const getPosts = term => {
	return async dispatch => {
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/posts/${term}/comments`
		);
		dispatch({ type: 'FETCH_POSTS', payload: response.data });
		console.log(response.data);
	};
};

// get albums
export const getAlbums = () => {
	return async dispatch => {
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/albums`
		);
		dispatch({ type: 'FETCH_ALBUMS', payload: response.data });
		// console.log(response.data);
	};
};

// get photos
export const getPhotos = term => {
	return async dispatch => {
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/albums/1/${term}`
		);
		dispatch({ type: 'FETCH_ALBUMS', payload: response.data });
		console.log(response.data);
	};
};
