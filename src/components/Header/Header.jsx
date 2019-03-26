import * as React from 'react';

import './Header.css';
import Button from '../Button/Button.jsx';

class Header extends React.Component {
	render() {
		return (
			<header>
				<div className='header__logo'>
					<img src='./static/img/service.png' className='header__logo__image'/>
					<div className='header__logo__label'>Service</div>
				</div>
				<div className='header__search'>
					<Button className='header__search__button' text='Find'/>
					<input className='header__search__input'/>
				</div>
				<nav>
					<div className='header__navigation__signIn'>
						<img src='./static/img/signIn.png' className='header__navigation__image'/>
						Sign In
					</div>
					<div className='header__navigation__signUp'>
						<img src='./static/img/signUp.png' className='header__navigation__image'/>
						Sign Up
					</div>
				</nav>
			</header>
		);
	}
}

export default Header;
