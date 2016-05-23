/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

import React, { Component, PropTypes } from "react";

class CheckBox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: props.value,
			onChange: props.onChange !== undefined ? props.onChange : event => this._onChange(event)
		};
	}

	render() {
		return (
			<div className="CheckBox">
				CheckBox
			</div>
		);
	}
}

CheckBox.propTypes = {
	value: PropTypes.bool,
	onChange: PropTypes.func
};

CheckBox.defaultProps = {
	value: false
};

export default CheckBox;
