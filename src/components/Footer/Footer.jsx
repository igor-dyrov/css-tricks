import * as React from 'react';

import './Footer.css';

class Footer extends React.Component {
	render() {
		return (
			<footer>
				<div className='footer__menu'>
					<div className='footer__menu__element'>Home</div>
					<div className='footer__menu__element'>Products</div>
					<div className='footer__menu__element'>Reviews</div>
				</div>
				<div className='footer__contact'>
					<img className='footer__contact__image' src='static/img/inst.png'/>
					<img className='footer__contact__image' src='static/img/facebook.png'/>
					<img className='footer__contact__image' src='static/img/twitter.png'/>
					<img className='footer__contact__image' src='static/img/google.png'/>
				</div>
			</footer>
		);
	}
}

export default Footer;
