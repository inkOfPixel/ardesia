/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

import Style from "./style";
import React, { PropTypes, Component } from "react";
import radium from "radium";

@radium
class TextField extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: props.value,
			onChange: props.onChange !== undefined ? props.onChange : event => this._onChange(event)
		};
	}

	componentWillReceiveProps(nextProps) {
		const { value } = nextProps;

		this.setState({ value });
	}

	_onChange(event) {
		this.setState({
			value: event.currentTarget.value
		});
	}

	render() {
		const { className, style } = this.props;
		const { value, onChange } = this.state;
		return (
			<input
				type="text"
				className={ `TextField ${className}` }
				style={[
					Style.base,
					style
				]}
				value={value}
				onChange={onChange}
			/>
		);
	}
}

TextField.propTypes = {
	className: PropTypes.string,
	onChange: PropTypes.func,
	style: PropTypes.object,
	value: PropTypes.string
};

TextField.defaultProps = {
	value: "",
	className: ""
};

export default TextField;
