import * as React from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../Header/Header';
import ContainerWrapper from '../../components/ContainerWrapper/ContainerWrapper';

import './Main.scss';
import './Mobile.scss';

const exampleText: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.`;

// tslint:disable:variable-name

const Main = () => (
	<ContainerWrapper>
		<Header/>
		<main>
			<h1 className='main__label'>Why you should cooperate with us?</h1>
			<div className='advantages'>
				<div className='advantage'>
					<img className='advantage__image' src='static/img/resp.png'/>
					<div className='advantage__label'>Responsibility</div>
					<div className='advantage__content'>{exampleText}</div>
				</div>
				<div className='advantage'>
					<img className='advantage__image' src='static/img/prof.png'/>
					<div className='advantage__label'>Professionality</div>
					<div className='advantage__content'>{exampleText}</div>
				</div>
				<div className='advantage'>
					<img className='advantage__image' src='static/img/polit.png'/>
					<div className='advantage__label'>Politeness</div>
					<div className='advantage__content'>{exampleText}</div>
				</div>
			</div>
		</main>
		<Footer/>
	</ContainerWrapper>
);

export default Main;
