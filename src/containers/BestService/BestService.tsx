import * as React from 'react';

import './Header.scss';

// tslint:disable:variable-name

const BestService = () => (
	<React.Fragment>
		<div className='bannerBestService'>
			<div className='headerBestService'>
				<div className='headerBestService__logo'>
					<img src='./static/img/BestService/logo.png'/>
				</div>
				<div className='headerBestService__menu'>
					<div className='headerBestService__link'>Home</div>
					<div className='headerBestService__link'>About</div>
					<div className='headerBestService__link headerBestService__link_active'>Services</div>
					<div className='headerBestService__link'>Portfolio</div>
					<div className='headerBestService__link'>Shop</div>
					<div className='headerBestService__link'>Contacts</div>
					<div className='headerBestService__link'>Pages</div>
				</div>
				<div className='headerBestService__contact'>
					<img src='./static/img/BestService/fb.png' className='headerBestService__social-link'/>
					<img src='./static/img/BestService/tw.png' className='headerBestService__social-link'/>
					<img src='./static/img/BestService/g+.png' className='headerBestService__social-link'/>
				</div>
			</div>
			<div className='bannerBestService__nav bannerBestService__nav_position_left'>
				<div className='bannerBestService__nav-button bannerBestService__nav-button_position_left'/>
			</div>
			<div className='bannerBestService__nav bannerBestService__nav_position_right'>
				<div className='bannerBestService__nav-button bannerBestService__nav-button_position_right'/>
			</div>
			<div className='bannerBestService__description'>
				<h1 className='bannerBestService__service-text'>The Best Services</h1>
				<h2 className='bannerBestService__description-text'>
					We provide the best services in the world
					We provide the best services in the world
					We provide the best services in the world
				</h2>
				<div className='bannerBestService__button'>Hire us</div>
			</div>
		</div>
	</React.Fragment>
);

export default BestService;
