import * as React from 'react';

import './Button.css';

class Button extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={`button {this.props.className}`}>{ this.props.text }</div>
		);
	}
}

export default Button;
