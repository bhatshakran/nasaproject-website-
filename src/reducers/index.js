import { combineReducers } from 'redux';
import { AuthReducer } from './AuthReducer';
import { homeReducer } from './homeReducer';
import { projectsReducer } from './projectsReducer';
import { postsReducer } from './postsReducer';
import { albumsReducer } from './albumsReducer';
import { photoReducer } from './photoReducer';

export default combineReducers({
	auth: AuthReducer,
	apod: homeReducer,
	projects: projectsReducer,
	posts: postsReducer,
	albums: albumsReducer,
	photos: photoReducer,
});
