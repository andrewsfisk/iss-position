import React, {Component} from 'react';
import Location from './Location';

class App extends Component {
	constructor() {
		super()
		this.state = {
			iss_position: {}
			}
		}

	componentDidMount() {
		fetch('http://api.open-notify.org/iss-now.json')
		.then(response => response.json())
		.then (position => this.setState({iss_position: position}));
	}

	render() {
		return (
			<div>
				<Location />
			</div>
		);
	}
}

export default App;