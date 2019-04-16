import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import history from '../../middleware/history/history.js';
import Button from '../Button/Button.jsx';
import { PATHS } from '../../routes.jsx';
import setAuthData from '../../redux/auth/auth.action.js';
import UserService from '../../services/UserService/UserService.js';

import './Header.scss';
import './Mobile.scss';

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
		
		this.state = {
			mobileMenuIsVisible: false,
		};
	}

	mobileMenuOnClick = () => {
		const header = document.getElementsByTagName('header')[0];
		const { mobileMenuIsVisible } = this.state;

		if (mobileMenuIsVisible) {
			header.style['grid-template-rows'] = '1fr';
			this.setState({
				mobileMenuIsVisible: false,
			});
		} else {
			header.style['grid-template-rows'] = '1fr 0.5fr';
			this.setState({
				mobileMenuIsVisible: true,
			});
		}
	};

	signOutOnClick = () => {
		const { setAuthInfo } = this.props;
		
		UserService.logOut()
			.then(() => {
				setAuthInfo({
					isAuthorized: false,
					login: ''
				});
			});
	};
	
	render() {
		const { isAuthorized } = this.props;
		const { userName } = this.props;
		const { mobileMenuIsVisible } = this.state;

		return (
			<header>
				<div className='header-logo'>
					<img src='./static/img/service.png' className='header-logo__image'/>
					<div className='header-logo__label' onClick={Header.logoOnClick}>Service</div>
				</div>
				<div className='header-search'>
					<Button className='header-search__button' text='Find'/>
					<input className='header-search__input'/>
				</div>
				{!isAuthorized ? (
					<nav>
						<div className='navigation-button' onClick={Header.signInOnClick}>
							<img src='./static/img/signIn.png' className='navigation-button__image'/>
							<div className='navigation-button__text'>Sign In</div>
						</div>
						<div className='navigation-button' onClick={Header.signUpOnClick}>
							<img src='./static/img/signUp.png' className='navigation-button__image'/>
							<div className='navigation-button__text'>Sign Up</div>
						</div>
					</nav>
				) : (
					<nav>
						<div className='navigation-button'>
							<img src='./static/img/user.png' className='navigation-button__image'/>
							<div className='navigation-button__text'>{userName}</div>
						</div>
						<div className='navigation-button'>
							<img src='./static/img/exit.png' className='navigation-button__image'/>
							<div className='navigation-button__text' onClick={this.signOutOnClick}>Log Out</div>
						</div>
					</nav>
				)}
				<div className='header__mobile-button' onClick={this.mobileMenuOnClick}>
					<div className='line'/>
					<div className='line'/>
					<div className='line'/>
				</div>
				{mobileMenuIsVisible ? (
					<div className='mobile-navigation'>
						<div className='navigation-button' onClick={Header.signInOnClick}>
							<img src='./static/img/signIn.png' className='navigation-button__image'/>
							<div className='navigation-button__text'>Sign In</div>
						</div>
						<div className='navigation-button' onClick={Header.signUpOnClick}>
							<img src='./static/img/signUp.png' className='navigation-button__image'/>
							<div className='navigation-button__text'>Sign Up</div>
						</div>
					</div>
				) : ''}
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
	setAuthInfo: () => {
	}
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
