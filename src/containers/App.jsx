import { Component } from 'react';
import Signin from './Signin';
import Nav from '../components/Nav';
import Landing from '../components/Landing';

class App extends Component {
	constructor() {
		super();
	}
	render() {
    const v = false;
    if(v) {
      return (
        <div>
          <Nav/>
          <Signin/>
        </div>
      )
    } else {
      return (
        <div>
          <Nav/>
          <Landing/>
        </div>
      );
    }
	}
}

export default App
