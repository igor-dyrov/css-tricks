import * as React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = (props) => {
	const { className } = props;
	const { text } = props;
	const { onClick } = props;

	return (
		<div className={`button ${className}`} onClick={onClick}>{text}</div>
	);
};

Button.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	className: '',
	text: '',
	onClick: () => {
	}
};

export default Button;
