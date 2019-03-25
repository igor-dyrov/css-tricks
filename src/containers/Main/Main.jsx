import * as React from 'react';
import Footer from '../../components/Footer/Footer.jsx';
import Header from '../../components/Header/Header.jsx';

import './Main.css';

const exampleText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.`;

class Main extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='main'>
				<Header/>
				<main>
					<div className="main__label">Why you should cooperate with us?</div>
					<div className="main__posts">
						<div className="main__post-block">
							<img className="post-block__image" src="static/img/resp.png"/>
							<div className="post-block__label">Responsibility</div>
							<div className="post-block__content">{exampleText}</div>
						</div>
						<div className="main__post-block">
							<img className="post-block__image" src="static/img/prof.png"/>
							<div className="post-block__label">Professionality</div>
							<div className="post-block__content">{exampleText}</div>
						</div>
						<div className="main__post-block">
							<img className="post-block__image" src="static/img/polit.png"/>
							<div className="post-block__label">Politeness</div>
							<div className="post-block__content">{exampleText}</div>
						</div>
					</div>
				</main>
				<Footer/>
			</div>
		);
	}
}

export default Main;
