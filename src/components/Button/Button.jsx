import * as React from 'react';

import './Button.css';

class Button extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={`${this.props.className} button`}>{ this.props.text }</div>
		);
	}
}

export default Button;
