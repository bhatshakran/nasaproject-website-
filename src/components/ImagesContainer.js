import React from 'react';
import Spinner from './Spinner';
import ImageCard from './ImageCard';
import { motion } from 'framer-motion';

const ImagesContainer = ({ images, loading, onClick }) => {
	const divVariants = {
		hidden: {
			x: '100vh',
			opacity: 0.3,
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				stiffness: 120,
			},
		},
	};
	if (loading) {
		return <Spinner />;
	} else if (images) {
		return (
			<>
				<div className='clear'>
					<button className='clr-btn form-control' onClick={onClick}>
						Clear and return back
					</button>
				</div>
				<motion.div
					className='images-grid'
					variants={divVariants}
					initial='hidden'
					animate='visible'>
					{images.map(image => (
						<ImageCard key={image.id} image={image} />
					))}
				</motion.div>
			</>
		);
	}
};
export default ImagesContainer;
