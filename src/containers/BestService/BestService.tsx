import * as React from 'react';

import './Header.scss';
import './About.scss';

// tslint:disable:variable-name

const BestService = () => (
	<React.Fragment>
		<div className='banner-best-service'>
			<div className='header-best-service'>
				<div className='header-best-service__logo'>
					<img src='./static/img/BestService/logo.png'/>
				</div>
				<div className='header-best-service__menu'>
					<div className='header-best-service__link'>Home</div>
					<div className='header-best-service__link'>About</div>
					<div className='header-best-service__link headerBestService__link_active'>Services</div>
					<div className='header-best-service__link'>Portfolio</div>
					<div className='header-best-service__link'>Shop</div>
					<div className='header-best-service__link'>Contacts</div>
					<div className='header-best-service__link'>Pages</div>
				</div>
				<div className='header-best-service__contact'>
					<img src='./static/img/BestService/fb.png' className='header-best-service__social-link'/>
					<img src='./static/img/BestService/tw.png' className='header-best-service__social-link'/>
					<img src='./static/img/BestService/g+.png' className='header-best-service__social-link'/>
				</div>
			</div>
			<div className='banner-best-service__nav banner-best-service__nav_position_left'>
				<div className='banner-best-service__nav-button banner-best-service__nav-button_position_left'/>
			</div>
			<div className='banner-best-service__nav banner-best-service__nav_position_right'>
				<div className='banner-best-service__nav-button banner-best-service__nav-button_position_right'/>
			</div>
			<div className='banner-best-service__description'>
				<div className='banner-best-service__service-text'>The Best Services</div>
				<div className='banner-best-service__description-text'>
					We provide the best services in the world
					We provide the best services in the world
					We provide the best services in the world
				</div>
				<div className='banner-best-service__button'>Hire us</div>
			</div>
		</div>
		<div className='about-best-service'>
			<div className='about-best-service__image'/>
			<div className='about-best-service__content'/>
		</div>
	</React.Fragment>
);

export default BestService;
