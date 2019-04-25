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
					<div className='headerBestService__link'>Services</div>
					<div className='headerBestService__link'>Portfolio</div>
					<div className='headerBestService__link'>Shop</div>
					<div className='headerBestService__link'>Contacts</div>
					<div className='headerBestService__link'>Pages</div>
				</div>
			</div>
		</div>
	</React.Fragment>
);

export default BestService;
