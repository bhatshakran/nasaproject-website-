import React, { Component } from 'react';
import { getAlbums } from '../actions';

import { connect } from 'react-redux';
import Spinner from './Spinner';
import AlbumItem from './AlbumItem';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

class AlbumsList extends Component {
	componentDidMount() {
		this.props.getAlbums();
		// this.props.getPhotos();
	}
	componentDidUpdate() {
		Aos.init({
			duration: 700,
		});
	}

	render() {
		const btnVariant = {
			visible: {
				opacity: 0.7,
			},
			hover: {
				opacity: 1,
				x: [0, -5, 5, -5, 5, 0],
				textShadow: '0px 0px 8px rgb(255, 255, 255) ',
				boxShadow: '0px 0px 8px rgb(255, 255, 255) ',
				transition: {
					delay: 0.2,
				},
			},
		};

		const { albums } = this.props.albums;
		if (!albums) {
			return <Spinner />;
		} else {
			return (
				<div className='album-holder' data-aos='fade-down'>
					<h1>
						{' '}
						<strong>Albumsgram</strong>{' '}
					</h1>
					<motion.div
						className='home-btn'
						variants={btnVariant}
						initial='hidden'
						animate='visible'
						whileHover='hover'>
						<a href='/home'>Home</a>
					</motion.div>
					{albums.map(item => (
						<AlbumItem key={item.id} item={item} />
					))}
				</div>
			);
		}
	}
}

const mapStateToProps = state => {
	return {
		albums: state.albums,
	};
};

export default connect(mapStateToProps, { getAlbums })(AlbumsList);
