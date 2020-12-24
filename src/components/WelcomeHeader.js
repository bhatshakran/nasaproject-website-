import React from 'react';

import { Link } from 'react-router-dom';

class WelcomeHeader extends React.Component {
	render() {
		return (
			<div className='wcm-hdr'>
				<Link to='/home'>To Home</Link>
			</div>
		);
	}
}

export default WelcomeHeader;
