import * as React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

class Button extends React.Component {
	render() {
		const { className } = this.props;
		const { text } = this.props;
		const { onClick } = this.props;

		return (
			<div className={`button ${className}`} onClick={onClick}>{ text }</div>
		);
	}
}

Button.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	className: '',
	text: '',
	onClick: () => {}
};

export default Button;
