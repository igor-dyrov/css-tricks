import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Header.css';
import history from '../../middleware/history/history.js';
import Button from '../Button/Button.jsx';
import { PATHS } from '../../routes.jsx';
import setAuthData from '../../redux/auth/auth.action.js';
import UserService from '../../services/UserService/UserService.js';

class Header extends React.Component {
	static signInOnClick() {
		if (history.location.pathname !== PATHS.SIGN_IN) {
			history.push(PATHS.SIGN_IN);
		}
	}

	static signUpOnClick() {
		if (history.location.pathname !== PATHS.SIGN_UP) {
			history.push(PATHS.SIGN_UP);
		}
	}

	static logoOnClick() {
		if (history.location.pathname !== PATHS.MENU) {
			history.push(PATHS.MENU);
		}
	}

	constructor(props) {
		super(props);

		this._signOutClicker = this.signOutOnClick.bind(this);
	}

	signOutOnClick() {
		const { setAuthInfo } = this.props;

		UserService.logOut()
			.then(() => {
				setAuthInfo({
					isAuthorized: false,
					login: ''
				});
			});
	}
	
	render() {
		const { isAuthorized } = this.props;
		const { userName } = this.props;

		return (
			<header>
				<div className='header__logo'>
					<img src='./static/img/service.png' className='header__logo-image'/>
					<div className='header__logo-label' onClick={Header.logoOnClick}>Service</div>
				</div>
				<div className='header__search'>
					<Button className='header__search-button' text='Find'/>
					<input className='header__search-input'/>
				</div>
				{!isAuthorized ? (
					<nav>
						<div className='header__navigation-element' onClick={Header.signInOnClick}>
							<img src='./static/img/signIn.png' className='header__navigation-image'/>
							<div className='header__navigation-label'>Sign In</div>
						</div>
						<div className='header__navigation-element' onClick={Header.signUpOnClick}>
							<img src='./static/img/signUp.png' className='header__navigation-image'/>
							<div className='header__navigation-label'>Sign Up</div>
						</div>
					</nav>
				) : (
					<nav>
						<div className='header__navigation-element'>
							<img src='./static/img/user.png' className='header__navigation-image'/>
							<div className='header__navigation-label'>{userName}</div>
						</div>
						<div className='header__navigation-element'>
							<img src='./static/img/exit.png' className='header__navigation-image'/>
							<div className='header__navigation-label' onClick={this._signOutClicker}>Log Out</div>
						</div>
					</nav>
				)}
			</header>
		);
	}
}

Header.propTypes = {
	isAuthorized: PropTypes.bool,
	userName: PropTypes.string,
	setAuthInfo: PropTypes.func
};

Header.defaultProps = {
	isAuthorized: false,
	userName: 'User',
	setAuthInfo: () => {}
};

const mapStateToProps = (state) => {
	return {
		isAuthorized: state.auth.isAuthorized,
		userName: state.auth.userName,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setAuthInfo(data) {
			dispatch(setAuthData(data));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
