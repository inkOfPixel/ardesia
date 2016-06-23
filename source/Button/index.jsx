/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

import Style from "./style";
import React, { PropTypes } from "react";
import radium from "radium";

const Button = ({
	children,
	className,
	type,
	actionType,
	size,
	style,
	onClick,
	onMouseDown
}) => (
	<button
		className={`Button ${className}`}
		style={{
			...Style.base,
			...getStyle(type, actionType),
			...Style[size],
			...style
		}}
		onClick={onClick}
		onMouseDown={onMouseDown}
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
	actionType: PropTypes.oneOf([
		"primary",
		"success",
		"warning",
		"danger"
	]),
	children: PropTypes.node,
	className: PropTypes.string,
	onClick: PropTypes.func,
	onMouseDown: PropTypes.func,
	size: PropTypes.oneOf([
		"extraSmall",
		"small",
		"normal",
		"large"
	]),
	style: PropTypes.object,
	type: PropTypes.oneOf([
		"fill",
		"hollow",
		"link"
	])
};

Button.defaultProps = {
	size: "normal",
	type: "fill",
	actionType: "primary",
	className: ""
};

export default radium(Button);
