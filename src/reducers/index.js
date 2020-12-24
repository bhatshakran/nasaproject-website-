import { combineReducers } from 'redux';
import { homeReducer } from './homeReducer';
import { projectsReducer } from './projectsReducer';
import { postsReducer } from './postsReducer';
import { albumsReducer } from './albumsReducer';
import { photoReducer } from './photoReducer';

export default combineReducers({
	apod: homeReducer,
	projects: projectsReducer,
	posts: postsReducer,
	albums: albumsReducer,
	photos: photoReducer,
});
