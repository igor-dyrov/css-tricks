import * as React from 'react';
import { Switch, withRouter } from 'react-router';
import { connect } from 'react-redux';

import UserService from '../../services/UserService/UserService';
import setAuthInfo from '../../redux/auth/auth.action';
import Loading from '../../components/Loading/Loading';

interface IProps {
	setAuthData: (object) => void;
	routes: JSX.Element[];
}

interface IState {
	isLoading: boolean;
}

class App extends React.Component<IProps, IState> {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
		};
	}

	public componentDidMount(): void {
		const { setAuthData } = this.props;
		this.setLoadingStatus(true);
		UserService.checkAuth().then((response) => {
			if (response.ok) {
				setAuthData({
					isAuthorized: true,
					userName: response.data.login,
				});
			}
			this.setLoadingStatus(false);
		});
	}

	public render(): JSX.Element {
		const { routes } = this.props;
		const { isLoading } = this.state;
		
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
	
	private setLoadingStatus(isLoading): void {
		this.setState({isLoading});
	}
}

const mapStateToProps = () => {
	return {};
};

const mapDispatchToProps = dispatch => {
	return {
		setAuthData: (data) => dispatch(setAuthInfo(data)),
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
