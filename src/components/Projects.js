import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
	useEffect(() => {
		Aos.init({
			duration: 900,
		});
	});
	return (
		<>
			<h1 className='services-tag'>Our Projects</h1>
			<section className='projects ' data-aos='fade-down'>
				<article className='project-item'>
					<h3>BioSentinel​</h3>
					<p>
						The BioSentinel mission was selected as one of the secondary
						payloads, and the sole biological experiment, to fly on NASA’s
						Artemis I mission planned to launch in 2021. The primary objective
						of BioSentinel is to develop a biosensor to detect and measure the
						impact of space radiation on living organisms over long durations
						beyond Low Earth Orbit (LEO). While progress identifying and
						characterizing biological radiation effects using Earth-based
						facilities has been significant, no terrestrial source can fully
						simulate the unique radiation environment encountered in deep space.
					</p>
				</article>
				<article className='project-item'>
					<h3>CubeSat Laser Infrared CrosslinK (CLICK)</h3>
					<p>
						The CubeSat Laser Infrared CrosslinK (CLICK) mission will
						demonstrate technology to advance the state of the art in
						communications between small spacecraft as well as the capability to
						gauge their relative distance and location. CLICK is comprised of
						two sequential missions.
					</p>
				</article>
				<article className='project-item'>
					<h3>Technology Educational Satellite (TechEdSat) Series</h3>
					<p>
						NASA’s TechEdSat series of technology demonstrations aims to bring
						small payloads back to Earth or to the surface of Mars – while
						pushing the state-of-the art in a variety of nano-sat technologies
						and experiments.
					</p>
				</article>
				<article className='project-item'>
					<h3>EcAMSat</h3>
					<p>
						The E. coli AntiMicrobial Satellite (EcAMSat) mission will
						investigate space microgravity effects on the antibiotic resistance
						and its genetic basis of E. coli, a bacterial pathogen responsible
						for urinary tract infection in humans and animals. Bacterial
						antibiotic resistance may pose a danger to astronauts in
						microgravity, where the immune response is weakened.
					</p>
				</article>
			</section>
		</>
	);
};

export default Projects;
