import React, { Component } from 'react';
import { Switch } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import UserService from '../../services/UserService/UserService.js';
import setAuthInfo from '../../redux/auth/auth.action.js';
import setLoadingStatus from '../../redux/global/global.action.js';

class App extends Component {
	render() {
		const { routes } = this.props;
		const { setAuthData } = this.props;

		UserService.checkAuth().then((response) => {
			if (response.ok) {
				setAuthData({
					isAuthorized: true,
					userName: response.data.login
				});
			}
		});

		return (
			<Switch>
				{ routes }
			</Switch>
		);
	}
}

App.propTypes = {
	routes: PropTypes.object.isRequired,
	setAuthData: PropTypes.func,
};

App.defaultProps = {
	setAuthData: () => {},
};

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = dispatch => {
	return {
		setAuthData(data) {
			dispatch(setAuthInfo(data));
		},
		setLoading(isLoading) {
			dispatch(setLoadingStatus({
				isLoading: isLoading,
			}));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
