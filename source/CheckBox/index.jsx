/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

import React, { Component, PropTypes } from "react";
import radium from "radium";
import Style from "./style";
import CheckBoxTick from "./CheckBoxTick";

@radium
class CheckBox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: props.value
		};
	}

	componentWillReceiveProps(nextProps) {
		const { value } = nextProps;

		if (value !== undefined) {
			this.setState({ value });
		}
	}

	onClick() {
		const { onChange, value } = this.props;
		if (onChange !== undefined) {
			onChange({
				value: !value
			});
		} else {
			this.setState({
				value: !this.state.value
			});
		}
	}

	render() {
		const { value } = this.state;
		return (
			<div
				className="CheckBox"
				onClick={() => this.onClick()}
				style={{
					...Style.base
				}}
			>
				<CheckBoxTick visible={value} />
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
