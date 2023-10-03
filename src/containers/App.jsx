import { Component } from 'react';
import Signin from './Signin';
import Nav from '../components/Nav';
import Landing from '../components/Landing';

class App extends Component {
	constructor() {
		super();
	}
	render() {
    const v = true;
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
          <div>
            <h1 className="text-6xl">Hello World</h1>
          </div>
        </div>
      );
    }
	}
}

export default App
