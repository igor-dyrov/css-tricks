import * as React from 'react';

import './Header.css';
import history from '../../middleware/history/history.js';
import Button from '../Button/Button.jsx';
import { PATHS } from '../../routes.jsx';

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

	render() {
		return (
			<header>
				<div className='header__logo'>
					<img src='./static/img/service.png' className='header__logo__image'/>
					<div className='header__logo__label' onClick={Header.logoOnClick}>Service</div>
				</div>
				<div className='header__search'>
					<Button className='header__search__button' text='Find'/>
					<input className='header__search__input'/>
				</div>
				<nav>
					<div className='header__navigation__signIn' onClick={Header.signInOnClick}>
						<img src='./static/img/signIn.png' className='header__navigation__image'/>
						Sign In
					</div>
					<div className='header__navigation__signUp' onClick={Header.signUpOnClick}>
						<img src='./static/img/signUp.png' className='header__navigation__image'/>
						Sign Up
					</div>
				</nav>
			</header>
		);
	}
}

export default Header;
