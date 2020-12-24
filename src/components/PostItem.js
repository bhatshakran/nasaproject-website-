import React, { useState, useEffect } from 'react';
import { GoTriangleDown } from 'react-icons/go';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

export default function PostItem({ item }) {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		Aos.init({
			duration: 2000,
		});
	}, []);

	const handleOpen = () => {
		console.log('clicked');
		setIsOpen(!isOpen);
	};

	return (
		<motion.article className='post' data-aos='fade-in'>
			<h3>Name: {item.name}</h3>
			<div className='post-icon' onClick={handleOpen}>
				<GoTriangleDown />
			</div>
			{isOpen && (
				<>
					<p>ID:{item.id}</p>
					<p>Email:{item.email}</p>
					<p>Comment: {item.body}</p>
				</>
			)}
		</motion.article>
	);
}
