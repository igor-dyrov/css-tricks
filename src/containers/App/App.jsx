import React, { Component } from 'react';
import { Switch, withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import UserService from '../../services/UserService/UserService.js';
import setAuthInfo from '../../redux/auth/auth.action.js';
import Loading from '../../components/Loading/Loading.jsx';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
		};
	}

	componentWillMount() {
		const { setAuthData } = this.props;
		this.setLoadingStatus(true);
		UserService.checkAuth().then((response) => {
			if (response.ok) {
				setAuthData({
					isAuthorized: true,
					userName: response.data.login
				});
			}
			this.setLoadingStatus(false);
		});
	}

	setLoadingStatus(isLoading) {
		this.setState({
			isLoading: isLoading,
		});
	}

	render() {
		const { routes } = this.props;
		const { isLoading } = this.state;
		
		console.log(routes);
		
		return (
			!isLoading ? (
				<Switch>
					{routes}
				</Switch>
			) : (
				<Loading/>
			)
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
		}
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
