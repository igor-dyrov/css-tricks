import * as React from 'react';

import Footer from '../../components/Footer/Footer.jsx';
import Header from '../../components/Header/Header.jsx';
import Button from '../../components/Button/Button.jsx';
import ContainerWrapper from '../../components/ContainerWrapper/ContainerWrapper.js';

import './SignIn.css';

class SignIn extends React.Component {
	render() {
		return (
			<ContainerWrapper>
				<Header/>
				<main>
					<div className='main__signIn-block'>
						<h1 className='signIn-block__label'>Sign In</h1>
						<div className='signIn-block__form'>
							<div className='signIn-block__form__row'>
								<div className='signIn-block__form__row__label'>Login</div>
								<input className='signIn-block__form__row__input'/>
							</div>
							<div className='signIn-block__form__row'>
								<div className='signIn-block__form__row__label'>Password</div>
								<input className='signIn-block__form__row__input' type='password'/>
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
