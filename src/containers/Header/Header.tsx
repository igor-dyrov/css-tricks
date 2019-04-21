import * as React from 'react';
import { connect } from 'react-redux';

import history from '../../middleware/history/history';
import Button from '../../components/Button/Button';
import NavigationButton from '../../components/NavigationButton/NavigationButton';
import { PATHS } from '../../routes';
import setAuthData from '../../redux/auth/auth.action';
import UserService from '../../services/UserService/UserService';

import './Header.scss';
import './Mobile.scss';

interface IProps {
	userName?: string;
	isAuthorized: boolean;
	setAuthInfo: (object) => void;
}

interface IState {
	mobileMenuIsVisible: boolean;
}

class Header extends React.Component<IProps, IState> {
	constructor(props) {
		super(props);
		
		this.state = {
			mobileMenuIsVisible: false,
		};
	}
	
	public static signInOnClick() {
		if (history.location.pathname !== PATHS.SIGN_IN) {
			history.push(PATHS.SIGN_IN);
		}
	}
	
	public static signUpOnClick() {
		if (history.location.pathname !== PATHS.SIGN_UP) {
			history.push(PATHS.SIGN_UP);
		}
	}
	
	public static logoOnClick() {
		if (history.location.pathname !== PATHS.MENU) {
			history.push(PATHS.MENU);
		}
	}
	
	public render(): JSX.Element {
		const {isAuthorized} = this.props;
		const {userName} = this.props;
		const {mobileMenuIsVisible} = this.state;
		
		const mobileNavigation = isAuthorized ?
			(
				<React.Fragment>
					<NavigationButton
						text={userName}
						imageSource='./static/img/user.png'
						key='userName'
					/>
					<NavigationButton
						text='Log Out'
						imageSource='./static/img/exit.png'
						onClick={this.signOutOnClick}
						key='logOut'
					/>
				</React.Fragment>
			)
			: (
				<React.Fragment>
					<NavigationButton
						text='Sign In'
						imageSource='./static/img/signIn1.png'
						onClick={Header.signInOnClick}
						key='signIn'
					/>
					<NavigationButton
						text='Sign Up'
						imageSource='./static/img/signUp1.png'
						onClick={Header.signUpOnClick}
						key='signUp'
					/>
				</React.Fragment>
			);
		
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
	
	private mobileMenuOnClick = () => {
		const header = document.getElementsByTagName('header')[0];
		const {mobileMenuIsVisible} = this.state;
		
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
	
	private signOutOnClick = () => {
		const {setAuthInfo} = this.props;
		
		UserService.logOut()
			.then(() => {
				setAuthInfo({isAuthorized: false});
			});
	}
}

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
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
