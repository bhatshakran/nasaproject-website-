import React, { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

const AlbumItem = ({ item }) => {
	useEffect(() => {
		Aos.init({
			duration: 2000,
		});
	}, []);

	const onClick = () => {
		console.log(item.id);
	};

	return (
		<article className='album' data-aos='fade-right'>
			<h3>Title:{item.title}</h3>
			<div className='post-icon'></div>

			<button className='view-alb' onClick={onClick}>
				View album
			</button>
		</article>
	);
};

export default AlbumItem;
