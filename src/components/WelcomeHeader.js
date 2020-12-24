import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class WelcomeHeader extends React.Component {
	render() {
		if (this.props.isSignedIn) {
			return (
				<div className='wcm-hdr'>
					<Link to='/home'>Back Home</Link>
				</div>
			);
		}
		return null;
	}
}

const mapStateToProps = state => {
	return {
		isSignedIn: state.auth.isSignedIn,
	};
};

export default connect(mapStateToProps)(WelcomeHeader);
