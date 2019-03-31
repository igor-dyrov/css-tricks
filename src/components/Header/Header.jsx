import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
							<div className='header__navigation-label'>Log Out</div>
						</div>
					</nav>
				)}
			</header>
		);
	}
}

Header.propTypes = {
	isAuthorized: PropTypes.bool,
	userName: PropTypes.string
};

Header.defaultProps = {
	isAuthorized: false,
	userName: 'User'
};

const mapStateToProps = (state) => {
	return {
		isAuthorized: state.auth.isAuthorized,
		userName: state.auth.userName,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
