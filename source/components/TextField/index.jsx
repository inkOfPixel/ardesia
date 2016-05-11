/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

import style from "./style";
import React, { PropTypes, Component } from "react";
import Radium from "radium";

@Radium
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
		const { className, theme } = this.props;
		const { value, onChange } = this.state;
		return (
			<input
				type="text"
				className={ `TextField ${theme} ${className}` }
				style={[
					style.base,
					theme === "light" && style.light,
					theme === "dark" && style.dark
				]}
				value={value}
				onChange={onChange}
			/>
		);
	}
}

TextField.propTypes = {
	value: PropTypes.string,
	className: PropTypes.string,
	theme: PropTypes.string,
	onChange: PropTypes.func
};

TextField.defaultProps = {
	value: "",
	className: "",
	theme: "light"
};

export default TextField;
