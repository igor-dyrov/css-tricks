import * as React from 'react';

import './Button.scss';

interface IProps {
	text?: string;
	className?: string;
	onClick?: (event) => void;
}

// tslint:disable:variable-name

const Button = (props: IProps) => {
	const {className} = props;
	const {text} = props;
	const {onClick} = props;
	
	return (
		<div className={`button ${className}`} onClick={onClick}>{text}</div>
	);
};

export default Button;
