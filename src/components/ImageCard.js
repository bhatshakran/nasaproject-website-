import React, { Component } from 'react';
import { motion } from 'framer-motion';

class ImageCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			spans: 0,
		};
		this.imageRef = React.createRef();
	}
	componentDidMount() {
		this.imageRef.current.addEventListener('load', this.setSpans);
	}

	setSpans = () => {
		const height = this.imageRef.current.clientHeight;
		const spans = Math.ceil(height / 10);

		this.setState({ spans });
	};

	render() {
		const { urls, alt_description } = this.props.image;
		const imgVariants = {
			visible: {
				opacity: 0.7,
				transition: {
					delay: 0.7,
				},
			},
			hover: {
				opacity: 1,
				scale: 1.2,
				boxShadow: ' 0px 0px 12px rgb(255,255,255)',
				transition: {
					type: 'spring',
					delay: 0.1,
				},
			},
		};
		return (
			<div style={{ gridRowEnd: `span ${this.state.spans}` }}>
				<motion.img
					ref={this.imageRef}
					src={urls.regular}
					alt={alt_description}
					variants={imgVariants}
					whileHover='hover'
				/>
			</div>
		);
	}
}

export default ImageCard;
