import * as React from 'react';

import './Header.scss';
import './About.scss';
import './Services.scss';

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
					<div className='header-best-service__link header-best-service__link_active'>Services</div>
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
			<div className='about-best-service__content'>
				<div className='about-best-service__label'>A little about us</div>
				<div className='about-best-service__separator'/>
				<div className='about-best-service__text'>
					We are  a company based in india with the motto “Digitalally
					Designed India”. We are  a company based in india with the motto
					“Digitalally  Designed India”. We are  a company based in india
					with the motto “Digitalally  Designed India”.
				</div>
				<div className='about-best-service__text'>
					We are  a company based in india with the motto “Digitalally
					Designed India”. We are  a company based in india with the motto
					“Digitalally  Designed India”. We are  a company based in india
					with the motto “Digitalally  Designed India”.
				</div>
				<div className='about-best-service__button'>READ MORE DETAILS</div>
			</div>
		</div>
		<div className='services-best-service'>
			<div className='services-best-service__logo'>
				<div className='services-best-service__separator services-best-service__separator_position_left'/>
				<div className='services-best-service__label'>Our Services</div>
				<div className='services-best-service__separator services-best-service__separator_position_right'/>
			</div>
			<div className='services-best-service__content'>
				<div className='services-best-service__service'>
					<img src='../../static/img/BestService/service.png' className='services-best-service__service-image'/>
					<div className='services-best-service__service-label'>web development</div>
					<div className='services-best-service__service-description'>
						We provide the best world class web
						development service We provide the best world
						class web development service
					</div>
					<div className='services-best-service__button'>more details</div>
				</div>
				<div className='services-best-service__service services-best-service__service_active'>
					<img src='../../static/img/BestService/service.png' className='services-best-service__service-image'/>
					<div className='services-best-service__service-label'>web development</div>
					<div className='services-best-service__service-description'>
						We provide the best world class web
						development service We provide the best world
						class web development service
					</div>
					<div className='services-best-service__button'>more details</div>
				</div>
				<div className='services-best-service__service'>
					<img src='../../static/img/BestService/service.png' className='services-best-service__service-image'/>
					<div className='services-best-service__service-label'>web development</div>
					<div className='services-best-service__service-description'>
						We provide the best world class web
						development service We provide the best world
						class web development service
					</div>
					<div className='services-best-service__button'>more details</div>
				</div>
			</div>
		</div>
	</React.Fragment>
);

export default BestService;
