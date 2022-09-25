import React from 'react';

const Location = ({ iss_position }) => {
	return (
		<div>
			{/*<h1>Test</h1>*/}
			<p>{iss_position.iss_position.longitude}</p>
			<p>{iss_position.iss_position.latitude}</p>
		</div>
	);
}

export default Location;