import * as React from 'react';

import './NavigationButton.scss';

interface IProps {
	text?: string;
	onClick?: () => void;
	imageSource?: string;
}

// tslint:disable:variable-name

const NavigationButton = (props: IProps) => {
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

export default NavigationButton;
