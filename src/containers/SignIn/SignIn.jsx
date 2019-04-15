import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import history from '../../middleware/history/history.js';
import { PATHS } from '../../routes.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Header from '../../components/Header/Header.jsx';
import Button from '../../components/Button/Button.jsx';
import ContainerWrapper from '../../components/ContainerWrapper/ContainerWrapper.js';
import Validator from '../../modules/Validator.js';
import UserService from '../../services/UserService/UserService.js';
import setAuthInfo from '../../redux/auth/auth.action.js';

import './SignIn.css';
import './Mobile.css';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loginIsValid: true,
			passwordIsValid: true,
			formIsValid: true,
		};
		this._submitterWithEnter = this.loginWithEnter.bind(this);
	}

	componentWillMount() {
		if (UserService.isAuth()) {
			history.push(PATHS.MENU);
		}
		window.addEventListener('keypress', this._submitterWithEnter);
	}

	componentDidMount() {
		this.validateForm();
	}

	componentWillUnmount() {
		window.removeEventListener('keypress', this._submitterWithEnter);
	}

	onSubmit = () => {
		this.validateForm();
		const { formIsValid } = this.state;
		const errorLabel = document.getElementById('signIn__login-error');
		if (formIsValid) {
			const { setAuthData } = this.props;
			const body = {
				login: document.getElementById('signIn__login').value,
				password: document.getElementById('signIn__password').value,
			};
			UserService.login(body)
				.then((response) => {
					if (response.ok) {
						setAuthData({
							isAuthorized: true,
							userName: response.data.login
						});
						history.push(PATHS.MENU);
					} else {
						errorLabel.innerText = response.data;
						errorLabel.style.display = 'block';
					}
				});
		}
	};

	validateInput = (event) => {
		let isValid = false;
		const property = `${event.target.name}IsValid`;
		const newState = {};
		if (event.target.value.length) {
			const error = Validator.validateInput(event.target.name, event.target.value);
			const errorLabel = document.getElementById(`signIn__${event.target.name}-error`);
			if (!error) {
				errorLabel.style.display = 'none';
				isValid = true;
			} else {
				errorLabel.innerText = error;
				errorLabel.style.display = 'block';
			}
		}
		newState[property] = isValid;
		this._setFormStatus(newState);
	};

	_setFormStatus(newState) {
		const { loginIsValid } = newState.hasOwnProperty('loginIsValid') ? newState : this.state;
		const { passwordIsValid } = newState.hasOwnProperty('passwordIsValid') ? newState : this.state;
		this.setState({
			formIsValid: loginIsValid && passwordIsValid,
			...newState
		});
	}


	validateForm() {
		const inputNames = ['login', 'password'];
		inputNames.forEach((name) => {
			document.getElementById(`signIn__${name}`).focus();
			document.getElementById(`signIn__${name}`).blur();
		});
	}

	loginWithEnter(event) {
		if (event.keyCode === 13 && event.type === 'keypress') {
			this.onSubmit();
		}
	}

	render() {
		const { formIsValid } = this.state;

		return (
			<ContainerWrapper>
				<Header/>
				<main>
					<div className='main__signIn-block'>
						<h1 className='signIn-block__label'>Sign In</h1>
						<div className='signIn-block__form'>
							<div className='signIn-block__form-row'>
								<p className='signIn-block__form-error' id='signIn__login-error'/>
							</div>
							<div className='signIn-block__form-row'>
								<div className='signIn-block__form-label'>Login</div>
								<input
									className='signIn-block__form-input'
									id='signIn__login'
									name='login'
									onBlur={this.validateInput}
								/>
							</div>
							<div className='signIn-block__form-row'>
								<p className='signIn-block__form-error' id='signIn__password-error'/>
							</div>
							<div className='signIn-block__form-row'>
								<div className='signIn-block__form-label'>Password</div>
								<input
									className='signIn-block__form-input'
									id='signIn__password'
									type='password'
									name='password'
									onBlur={this.validateInput}
								/>
							</div>
							<div className='signIn-block__form-buttons'>
								<Button
									className={`signIn-block__button ${formIsValid ? '' : 'disabled'}`}
									text='Log In'
									onClick={this.onSubmit}
								/>
							</div>
						</div>
					</div>
				</main>
				<Footer/>
			</ContainerWrapper>
		);
	}
}

SignIn.propTypes = {
	setAuthData: PropTypes.func,
};

SignIn.defaultProps = {
	setAuthData: () => {},
};

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = dispatch => {
	return {
		setAuthData(data) {
			dispatch(setAuthInfo(data));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
