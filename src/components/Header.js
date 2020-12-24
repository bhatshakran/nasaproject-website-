import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<nav className='nav-top'>
			<div className='nav-brand'>
				<h2>NASA</h2>
			</div>

			<ul className='nav-items'>
				<li className='nav-item'>
					<Link to='/home'>Home</Link>
				</li>
				<li className='nav-item'>
					<Link to='/images'>Images</Link>
				</li>
				<li className='nav-item'>
					<Link to='/albums'>Albums</Link>
				</li>
				<li className='nav-item'>
					<Link to='/posts'>Posts</Link>
				</li>
				<li className='nav-item'>
					<Link to='/'>Landing</Link>
				</li>
			</ul>
		</nav>
	);
}
