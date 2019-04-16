import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import history from '../../middleware/history/history.js';
import Button from '../Button/Button.jsx';
import NavigationButton from '../NavigationButton/NavigationButton.jsx';
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
		
		const mobileNavigation = isAuthorized ? [
			<NavigationButton
				text={userName}
				imageSource='./static/img/user.png'
				key='userName'
			/>,
			<NavigationButton
				text='Log Out'
				imageSource='./static/img/exit.png'
				onClick={this.signOutOnClick}
				key='logOut'
			/>
		] : [
			<NavigationButton
				text='Sign In'
				imageSource='./static/img/signIn1.png'
				onClick={Header.signInOnClick}
				key='signIn'
			/>,
			<NavigationButton
				text='Sign Up'
				imageSource='./static/img/signUp1.png'
				onClick={Header.signUpOnClick}
				key='signUp'
			/>
		];
		
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
				<nav>
					{mobileNavigation}
				</nav>
				<div className='header__mobile-button' onClick={this.mobileMenuOnClick}>
					<div className='line'/>
					<div className='line'/>
					<div className='line'/>
				</div>
				{mobileMenuIsVisible ? (
					<div className='mobile-navigation'>
						{mobileNavigation}
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
