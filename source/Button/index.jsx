/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

import Style from "./style";
import React, { PropTypes } from "react";
import radium from "radium";

const Button = ({ children, type, actionType, size, style }) => (
	<button
		className="Button"
		style={{
			...Style.base,
			...getStyle(type, actionType),
			...Style[size],
			...style
		}}
	>
		{children}
	</button>
);

function getStyle(type, actionType) {
	return Style[`${type}${capitalizeText(actionType)}`];
}

function capitalizeText(text) {
	return `${text.charAt(0).toUpperCase()}${text.substring(1)}`;
}

Button.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element)
	]),
	size: PropTypes.oneOf([
		"extraSmall",
		"small",
		"normal",
		"large"
	]),
	type: PropTypes.oneOf([
		"fill",
		"hollow",
		"link"
	]),
	actionType: PropTypes.oneOf([
		"primary",
		"success",
		"warning",
		"danger"
	]),
	style: PropTypes.object
};

Button.defaultProps = {
	size: "normal",
	type: "fill",
	actionType: "primary"
};

export default radium(Button);
