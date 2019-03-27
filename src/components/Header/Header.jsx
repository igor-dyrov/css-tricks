import * as React from 'react';
import { Redirect } from 'react-router';

import './Header.css';
import Button from '../Button/Button.jsx';
import { PATHS } from '../../routes.jsx';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this._signInClicker = this.signInOnClick.bind(this);
		this._signUpClicker = this.signUpOnClick.bind(this);
		this._logoClicker = this.logoOnClick.bind(this);
		this.state = {
			needRedirect: false,
			redirectTo: ''
		};
	}

	logoOnClick() {
		this.setState({
			needRedirect: true,
			redirectTo: PATHS.MENU
		});
	}

	signInOnClick() {
		this.setState({
			needRedirect: true,
			redirectTo: PATHS.SIGN_IN
		});
	}

	signUpOnClick() {

	}

	render() {
		const { needRedirect } = this.state;
		const { redirectTo } = this.state;

		return (
			<header>
				{needRedirect ? <Redirect to={redirectTo}/> : (
					<div className='header__logo'>
						<img src='./static/img/service.png' className='header__logo__image'/>
						<div className='header__logo__label' onClick={this._logoClicker}>Service</div>
					</div>
				)}
				<div className='header__search'>
					<Button className='header__search__button' text='Find'/>
					<input className='header__search__input'/>
				</div>
				<nav>
					<div className='header__navigation__signIn' onClick={this._signInClicker}>
						<img src='./static/img/signIn.png' className='header__navigation__image'/>
						Sign In
					</div>
					<div className='header__navigation__signUp' onClick={this._signUpClicker}>
						<img src='./static/img/signUp.png' className='header__navigation__image'/>
						Sign Up
					</div>
				</nav>
			</header>
		);
	}
}

export default Header;
