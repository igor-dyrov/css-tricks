import * as React from 'react';
import PropTypes from 'prop-types';

import './NavigationButton.scss';

const NavigationButton = (props) => {
	const { text } = props;
	const { onClick } = props;
	const { imageSource } = props;

	return (
		<div className='navigation-button' onClick={onClick}>
			<img src={imageSource} className='navigation-button__image'/>
			<div className='navigation-button__text'>{text}</div>
		</div>
	);
};

NavigationButton.propTypes = {
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	imageSource: PropTypes.string.isRequired,
};

NavigationButton.defaultProps = {
	onClick: () => {},
};

export default NavigationButton;
