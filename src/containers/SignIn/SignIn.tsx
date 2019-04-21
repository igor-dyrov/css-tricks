import * as React from 'react';
import { connect } from 'react-redux';

import history from '../../middleware/history/history.js';
import { PATHS } from '../../routes';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import ContainerWrapper from '../../components/ContainerWrapper/ContainerWrapper';
import Validator from '../../modules/Validator.js';
import UserService from '../../services/UserService/UserService';
import setAuthInfo from '../../redux/auth/auth.action.js';
import { IAuthState } from '../../redux/auth/auth.reducer';

import './SignIn.scss';
import './Mobile.scss';

interface IProps {
	setAuthData: (state: IAuthState) => void;
}

interface IState {
	formIsValid: boolean;
	loginIsValid: boolean;
	passwordIsValid: boolean;
}

class SignIn extends React.Component<IProps, IState> {
	// tslint:disable:variable-name
	private readonly _submitterWithEnter: (KeyboardEvent) => void;
	// tslint:enable:variable-name
	constructor(props) {
		super(props);
		this.state = {
			loginIsValid: true,
			passwordIsValid: true,
			formIsValid: true,
		};
		this._submitterWithEnter = this.loginWithEnter.bind(this);
	}
	
	public render(): JSX.Element {
		const { formIsValid } = this.state;
		
		return (
			<ContainerWrapper>
				<Header/>
				<main>
					<div className='signIn'>
						<h1 className='signIn__label'>Sign In</h1>
						<div className='signIn-form'>
							<div className='form-row'>
								<p className='form__error-label' id='signIn__login-error'/>
							</div>
							<div className='form-row'>
								<div className='form-row__label'>Login</div>
								<input
									className='form-row__input'
									id='signIn__login'
									name='login'
									onBlur={this.inputOnBlur}
								/>
							</div>
							<div className='form-row'>
								<p className='form__error-label' id='signIn__password-error'/>
							</div>
							<div className='form-row'>
								<div className='form-row__label'>Password</div>
								<input
									className='form-row__input'
									id='signIn__password'
									type='password'
									name='password'
									onBlur={this.inputOnBlur}
								/>
							</div>
							<div className='form__buttons'>
								<Button
									className={`signIn__button_action_submit ${formIsValid ? '' : 'signIn__button_disabled'}`}
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
	
	public componentDidMount() {
		if (UserService.isAuth()) {
			history.push(PATHS.MENU);
		}
		window.addEventListener('keypress', this._submitterWithEnter);
		this.validateForm();
	}
	
	public componentWillUnmount() {
		window.removeEventListener('keypress', this._submitterWithEnter);
	}
	
	private onSubmit = () => {
		this.validateForm();
		const { formIsValid } = this.state;
		const errorLabel = document.getElementById('signIn__login-error');
		if (formIsValid) {
			const { setAuthData } = this.props;
			const body = {
				login: (document.getElementById('signIn__login') as HTMLInputElement).value,
				password: (document.getElementById('signIn__password') as HTMLInputElement).value,
			};
			UserService.login(body)
				.then((response) => {
					if (response.ok) {
						setAuthData({
							isAuthorized: true,
							userName: response.data.login,
						});
						history.push(PATHS.MENU);
					} else {
						errorLabel.innerText = response.message;
						errorLabel.style.display = 'block';
					}
				});
		}
	};
	
	private setFormStatus(newState) {
		const { loginIsValid } = newState.hasOwnProperty('loginIsValid') ? newState : this.state;
		const { passwordIsValid } = newState.hasOwnProperty('passwordIsValid') ? newState : this.state;
		this.setState({
			formIsValid: loginIsValid && passwordIsValid,
			...newState,
		});
	}
	
	private inputOnBlur = (event) => {
		this.validateInput(event.target.name, event.target.value);
	};
	
	private validateInput(name, value) {
		let isValid = false;
		const property = `${name}IsValid`;
		const newState = {};
		if (value.length) {
			const error = Validator.validateInput(name, value);
			const errorLabel = document.getElementById(`signIn__${name}-error`);
			if (!error) {
				errorLabel.style.display = 'none';
				isValid = true;
			} else {
				errorLabel.innerText = error;
				errorLabel.style.display = 'block';
			}
		}
		newState[property] = isValid;
		this.setFormStatus(newState);
	}
	
	private validateForm() {
		const inputNames = ['login', 'password'];
		inputNames.forEach((name) => {
			const input = document.getElementById(`signIn__${name}`) as HTMLInputElement;
			this.validateInput(name, input.value);
		});
	}

	private loginWithEnter(event: KeyboardEvent) {
		if (event.key === 'Enter' && event.type === 'keypress') {
			this.onSubmit();
		}
	}
}

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
