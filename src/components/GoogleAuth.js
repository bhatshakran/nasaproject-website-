import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SignIn, SignOut } from '../actions';
import { RiGoogleLine } from 'react-icons/ri';
import history from '../history';
import { motion } from 'framer-motion';

class GoogleAuth extends Component {
	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client
				.init({
					clientId:
						'572443672910-crk8rvhhs8b85c4a1cfalau2nmpi0ecd.apps.googleusercontent.com',
					scope: 'email',
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.onAuthChange(this.auth.isSignedIn.get());
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onAuthChange = isSignedIn => {
		if (isSignedIn) {
			this.props.SignIn(this.auth.currentUser.get().getId());
		} else {
			this.props.SignOut();
		}
	};

	onSignInClick = () => {
		this.auth.signIn();
		history.push('/home');
	};
	onSignOutClick = () => {
		this.auth.signOut();
		history.push('/');
	};
	renderAuthButton() {
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

		if (this.props.isSignedIn === null) {
			return null;
		} else if (this.props.isSignedIn) {
			return (
				<motion.button
					onClick={this.onSignOutClick}
					className='btn-login'
					variants={btnVariant}
					initial='hidden'
					animate='visible'
					whileHover='hover'>
					Sign Out
					<div className='g-icon'>
						<RiGoogleLine />
					</div>
				</motion.button>
			);
		} else {
			return (
				<button onClick={this.onSignInClick} className='btn-login'>
					<div className='g-icon'>
						<RiGoogleLine />
					</div>
					Sign In with Google
				</button>
			);
		}
	}
	render() {
		return <div>{this.renderAuthButton()}</div>;
	}
}
const mapStateToProps = state => {
	return {
		isSignedIn: state.auth.isSignedIn,
	};
};

export default connect(mapStateToProps, { SignIn, SignOut })(GoogleAuth);
