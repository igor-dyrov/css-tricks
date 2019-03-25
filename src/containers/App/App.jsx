import React, { Component} from 'react';
import { Switch } from 'react-router';

class App extends Component {

	constructor(props) {
		super(props);
	}

	render(){
		return(
			<Switch>
				{ this.props.routes }
			</Switch>
		);
	}
}

export default App;