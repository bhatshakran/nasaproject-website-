import React from 'react';
import { connect } from 'react-redux';
import { getApod } from '../actions';
import { FaRocket, FaSatellite } from 'react-icons/fa';
import { GiStarsStack } from 'react-icons/gi';
import { IoMdPlanet } from 'react-icons/io';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Aos from 'aos';
import 'aos/dist/aos.css';

class Home extends React.Component {
	async componentDidMount() {
		this.props.getApod();
	}
	componentDidUpdate() {
		Aos.init({
			duration: 700,
		});
	}
	render() {
		return (
			<div className='home'>
				<Header />
				<div className='container'>
					<img
						src={this.props.apod}
						alt=''
						className='apod-img'
						data-aos='fade-left'
					/>
					<h1 className='services-tag'>Services</h1>
					<section
						className='services'
						data-aos='fade-up'
						data-aos-anchor-placement='top-center'>
						<article className='service-item'>
							<FaRocket className='icon' />
							<p>
								NASA's Launch Services Program is responsible for launching
								uncrewed rockets delivering spacecraft that observe the Earth,
								visit other planets and explore the universe - from weather
								satellites to telescopes to Mars rovers and more.
							</p>
						</article>
						<article className='service-item'>
							<GiStarsStack className='icon' />
							<p>
								NASA Science pursues research of planetary systems by supporting
								a focused suite of ground-based observations through the Kepler
								mission, a now retired space-based observatory which studied the
								prevalence (how many there are per star) of extrasolar planets,
								and through the operation of TESS (Transiting Exoplanet Survey
								Satellite) which is performing an all-sky survey to discover
								transiting exoplanet ranging from Earth-sized to gas giants.
							</p>
						</article>
						<article className='service-item'>
							<FaSatellite className='icon' />
							<p>
								NASA has launched dozens of satellites into space, starting with
								the Explorer 1 satellite in 1958. Explorer 1 was America's first
								man-made satellite. The main instrument aboard was a sensor that
								measured high-energy particles in space called cosmic rays
							</p>
						</article>
						<article className='service-item'>
							<IoMdPlanet className='icon' />
							<p>
								We're learning new things about our neighboring planets all the
								time. We send to take pictures, gather information, and find out
								more about them.
							</p>
						</article>
					</section>
					<Projects />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		apod: Object.values(state.apod),
		isSignedIn: state.auth.isSignedIn,
	};
};

export default connect(mapStateToProps, { getApod })(Home);
