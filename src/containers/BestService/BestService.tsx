import * as React from 'react';

import './Header.scss';
import './About.scss';
import './Services.scss';
import './Feedback.scss';

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
					We are a company based in india with the motto “Digitalally
					Designed India”. We are a company based in india with the motto
					“Digitalally Designed India”. We are a company based in india
					with the motto “Digitalally Designed India”.
				</div>
				<div className='about-best-service__text'>
					We are a company based in india with the motto “Digitalally
					Designed India”. We are a company based in india with the motto
					“Digitalally Designed India”. We are a company based in india
					with the motto “Digitalally Designed India”.
				</div>
				<div className='about-best-service__button'>READ MORE DETAILS</div>
			</div>
		</div>
		<div className='services-best-service'>
			<div className='services-best-service__logo'>
				<div className='best-service__separator best-service__separator_position_left'/>
				<div className='services-best-service__label'>Our Services</div>
				<div className='best-service__separator best-service__separator_position_right'/>
			</div>
			<div className='services-best-service__content'>
				<div className='services-best-service__service'>
					<img src='../../static/img/BestService/serv.png' className='services-best-service__service-image'/>
					<div className='services-best-service__service-label'>web development</div>
					<div className='services-best-service__service-description'>
						We provide the best world class web
						development service We provide the best world
						class web development service
					</div>
					<div className='services-best-service__button'>more details</div>
				</div>
				<div className='services-best-service__service services-best-service__service_active'>
					<img src='../../static/img/BestService/serv.png' className='services-best-service__service-image'/>
					<div className='services-best-service__service-label'>web development</div>
					<div className='services-best-service__service-description'>
						We provide the best world class web
						development service We provide the best world
						class web development service
					</div>
					<div className='services-best-service__button'>more details</div>
				</div>
				<div className='services-best-service__service'>
					<img src='../../static/img/BestService/serv.png' className='services-best-service__service-image'/>
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
		<div className='feedback-best-service'>
			<div className='feedback-best-service__logo'>
				<div className='best-service__separator best-service__separator_position_left'/>
				<div className='feedback-best-service__label'>Feedback</div>
				<div className='best-service__separator best-service__separator_position_right'/>
			</div>
			<div className='feedback-best-service__reviews'>
				<div className='feedback-best-service__review-text'>
					It was always a pleasure
					doing bussiness with them.
					I love the quality of work.
				</div>
				<div className='feedback-best-service__separator'/>
				<div className='feedback-pagination'>
					<div className='feedback-pagination__switcher feedback-pagination__switcher_position_left'/>
					<div className='feedback-pagination__label'>1/10</div>
					<div className='feedback-pagination__switcher'/>
				</div>
			</div>
			<div className='feedback-best-service__persons'>
				<div className='feedback-best-service__person feedback-best-service__person_number_1'/>
				<div className='feedback-best-service__person feedback-best-service__person_number_2'/>
				<div className='feedback-best-service__person feedback-best-service__person_number_3'/>
			</div>
		</div>
	</React.Fragment>
);

export default BestService;
