import { Component } from 'react';
import Nav from '../components/Nav';
import Landing from '../components/Landing';

class App extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div>
				<Nav/>
				<Landing/>
			</div>
		);
	}
}

export default App
