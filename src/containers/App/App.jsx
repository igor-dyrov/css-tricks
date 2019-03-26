import React, { Component } from 'react';
import { Switch } from 'react-router';
import PropTypes from 'prop-types';

class App extends Component {
	render() {
		const { routes } = this.props;

		return (
			<Switch>
				{ routes }
			</Switch>
		);
	}
}

App.propTypes = {
	routes: PropTypes.object.isRequired,
};

export default App;
