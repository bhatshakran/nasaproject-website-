import React from 'react';
import WelcomeHeader from '../components/WelcomeHeader';
import welback from '../images/welcome.jpg';
import planet from '../images/planet.png';
import rocket from '../images/rocket.png';
import { motion } from 'framer-motion';

const Welcome = () => {
	return (
		<div className='welcome-page'>
			<WelcomeHeader />
			<img src={welback} alt='background of welcome' className='back-pic' />

			<img src={planet} alt='planet' className='planet-pic' />
			<img src={rocket} alt='' className='rocket-pic' />
			<motion.div
				className='text'
				initial={{ top: '-1000' }}
				animate={{ y: '0' }}
				transition={{
					type: 'tween',
					duration: '2',
				}}>
				<h2>Welcome to Nasa-X</h2>
				<p>Get the latest space exploration, innovation and astronomy news</p>
			</motion.div>
		</div>
	);
};

export default Welcome;
