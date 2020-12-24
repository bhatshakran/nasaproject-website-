import React from 'react';
import { getImage } from '../actions';
import { connect } from 'react-redux';
import ImagesContainer from './ImagesContainer';
import axios from 'axios';
import LoadedImgs from './LoadedImgs';
import { motion } from 'framer-motion';

class Images extends React.Component {
	state = {
		text: '',
		images: '',
		loading: false,
	};

	searchImages = async text => {
		this.setState({
			loading: true,
		});
		const response = await axios.get(
			`https://api.unsplash.com/search/photos
						?query=${text}&client_id=9I_jO2ePieFwlgQ_aA2hqxKJkZA-eRriQkMu-U7yxFw`
		);
		this.setState({
			images: response.data.results,
			loading: false,
		});
	};

	onSubmit = e => {
		e.preventDefault();
		if (this.state.text === '') {
			alert('enter some text');
		} else if (this.state.text) {
			this.searchImages(this.state.text);
			this.setState({
				text: '',
			});
		}
	};

	onChange = e =>
		this.setState({
			[e.target.name]: e.target.value,
		});
	renderWhat() {
		if (this.state.images === '') {
			return <LoadedImgs />;
		} else if (this.state.images) {
			return (
				<ImagesContainer
					images={this.state.images}
					loading={this.state.loading}
					singleImg={this.state.singleImg}
					onClick={this.handleClick}
				/>
			);
		}
	}

	handleClick = () => {
		console.log('clicked');
		this.setState({
			images: '',
		});
	};

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
		// console.log(this.props.images.images);
		return (
			<>
				<div className='img-holder'>
					<h1>Pics-ify</h1>
					<motion.div
						className='home-btn'
						variants={btnVariant}
						initial='hidden'
						animate='visible'
						whileHover='hover'>
						<a href='/home'>Home</a>
					</motion.div>
					<form onSubmit={this.onSubmit}>
						<label className=' form-control'>Search for Images</label>
						<input
							type='text'
							name='text'
							value={this.state.text}
							onChange={this.onChange}
							className='form-control'
						/>
					</form>
					{this.renderWhat()}
				</div>
			</>
		);
	}
}

export default connect(null, { getImage })(Images);
