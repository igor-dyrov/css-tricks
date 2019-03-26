import * as React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

class Button extends React.Component {
	render() {
		const { className } = this.props;
		const { text } = this.props;

		return (
			<div className={`${className} button`}>{ text }</div>
		);
	}
}

Button.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string,
};

Button.defaultProps = {
	className: '',
	text: '',
};

export default Button;
