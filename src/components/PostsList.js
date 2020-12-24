import React, { Component } from 'react';
import { getPosts } from '../actions';
import { connect } from 'react-redux';
import Spinner from './Spinner';
import PostItem from './PostItem';
import { motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';

class PostsList extends Component {
	componentDidMount() {
		this.props.getPosts(1);
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
		const { data } = this.props.posts;
		if (!data) {
			return <Spinner />;
		} else {
			return (
				<div className='post-holder' data-aos='fade-down'>
					<h1>
						{' '}
						<strong>Postsgram</strong>{' '}
					</h1>
					<motion.div
						className='home-btn'
						variants={btnVariant}
						initial='hidden'
						animate='visible'
						whileHover='hover'>
						<a href='/home'>Home</a>
					</motion.div>
					{data.map(item => (
						<PostItem key={item.id} item={item} />
					))}
				</div>
			);
		}
	}
}

const mapStateToProps = state => {
	return {
		posts: state.posts,
	};
};

export default connect(mapStateToProps, { getPosts })(PostsList);
