import * as React from 'react';

import Footer from '../../components/Footer/Footer.jsx';
import Header from '../../components/Header/Header.jsx';
import Button from '../../components/Button/Button.jsx';
import ContainerWrapper from '../../components/ContainerWrapper/ContainerWrapper.js';

import './SignIn.css';
import './Mobile.css';

class SignIn extends React.Component {
	static validateInput(name) {

	}

	constructor(props) {
		super(props);
		this._loginValidator = SignIn.validateInput.bind({}, 'login');
		this._passwordValidator = SignIn.validateInput.bind({}, 'password');
	}

	onSubmit() {

	}

	render() {
		return (
			<ContainerWrapper>
				<Header/>
				<main>
					<div className='main__signIn-block'>
						<h1 className='signIn-block__label'>Sign In</h1>
						<div className='signIn-block__form'>
							<div className='signIn-block__form__row'>
								<p className='signIn-block__form__error'>Login must be at most 20 symbols long</p>
							</div>
							<div className='signIn-block__form__row'>
								<div className='signIn-block__form__label'>Login</div>
								<input className='signIn-block__form__input' name='login'/>
							</div>
							<div className='signIn-block__form__row'>
								<p className='signIn-block__form__error'>Password must be at least 8 symbols long</p>
							</div>
							<div className='signIn-block__form__row'>
								<div className='signIn-block__form__label'>Password</div>
								<input className='signIn-block__form__input' type='password' name='password'/>
							</div>
							<div className='signIn-block__form__buttons'>
								<Button className='signIn-block__button' text='Log In'/>
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
