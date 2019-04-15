import * as React from 'react';

import './Footer.css';

export default (props) => {
	return (
		<footer>
			<div className='footer-menu'>
				<div className='footer-menu__link'>Home</div>
				<div className='footer-menu__link'>Products</div>
				<div className='footer-menu__link'>Reviews</div>
			</div>
			<div className='footer-contact'>
				<img className='footer-contact__image' src='static/img/inst.png'/>
				<img className='footer-contact__image' src='static/img/facebook.png'/>
				<img className='footer-contact__image' src='static/img/twitter.png'/>
				<img className='footer-contact__image' src='static/img/google.png'/>
			</div>
		</footer>
	);
};
