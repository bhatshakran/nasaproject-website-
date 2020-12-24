import React, { useEffect } from 'react';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import image6 from '../images/6.jpg';
import image7 from '../images/7.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const LoadedImgs = () => {
	useEffect(() => {
		Aos.init({
			duration: 2000,
		});
	}, []);
	return (
		<div className='loaded-imgs' data-aos='zoom-in'>
			<img src={image1} alt='one' />
			<img src={image2} alt='two' />
			<img src={image3} alt='three' />
			<img src={image4} alt='four' />
			<img src={image5} alt='five' />
			<img src={image6} alt='six' />
			<img src={image7} alt='seven' />
		</div>
	);
};

export default LoadedImgs;
