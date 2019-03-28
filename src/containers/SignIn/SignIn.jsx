import * as React from 'react';

import Footer from '../../components/Footer/Footer.jsx';
import Header from '../../components/Header/Header.jsx';
import Button from '../../components/Button/Button.jsx';
import ContainerWrapper from '../../components/ContainerWrapper/ContainerWrapper.js';
import Validator from '../../modules/Validator.js';

import './SignIn.css';
import './Mobile.css';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			formIsValid: true,
		};
		this.inputValidator = this.validateInput.bind(this);
	}

	onSubmit() {
		const inputNames = ['login', 'password'];
		inputNames.forEach((name) => {
			document.getElementById(`signIn__${name}-error`).blur();
		});
	}

	validateInput(event) {
		let isValid = true;
		if (event.target.value.length) {
			const error = Validator.validateInput(event.target.name, event.target.value);
			const errorLabel = document.getElementById(`signIn__${event.target.name}-error`);
			if (!error) {
				errorLabel.style.display = 'none';
			} else {
				errorLabel.innerText = error;
				errorLabel.style.display = 'block';
				isValid = false;
			}
		}
		this.setState({
			formIsValid: isValid
		});
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
									name='login'
									onBlur={this.inputValidator}
								/>
							</div>
							<div className='signIn-block__form-row'>
								<p className='signIn-block__form-error' id='signIn__password-error'/>
							</div>
							<div className='signIn-block__form-row'>
								<div className='signIn-block__form-label'>Password</div>
								<input
									className='signIn-block__form-input'
									   type='password'
									   name='password'
									   onBlur={this.inputValidator}
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

export default SignIn;
