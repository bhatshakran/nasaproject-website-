import React from 'react';
import Welcome from './pages/Welcome';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import './App.scss';
import PostsList from './components/PostsList';
import Images from './components/Images';
import AlbumsList from './components/AlbumsList';

const App = () => {
	return (
		<>
			<Switch>
				<Route exact path='/' component={Welcome} />
				<Route exact path='/home' component={Home} />
				<Route exact path='/images' component={Images} />
				<Route exact path='/posts' component={PostsList} />
				<Route exact path='/albums' component={AlbumsList} />
			</Switch>
		</>
	);
};

export default App;
