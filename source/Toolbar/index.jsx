/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

import React, { PropTypes, Children, cloneElement, isValidElement } from "react";
import radium from "radium";
import Style from "./style";

const Toolbar = props => {
	const { style, className, floating } = props;
	return (
		<div
			className={`Toolbar ${className}`}
			style={[
				Style.base,
				floating && Style.floating,
				floating && getToolbarFloatingPositionStyle(props),
				style
			]}
		>
			{renderChildren(props)}
		</div>
	);
};

function getToolbarFloatingPositionStyle(props) {
	const { left, top } = props;
	return { left, top };
}

function renderChildren(props) {
	const { children } = props;
	return Children.map(children, child => {
		if (isValidElement(child)) {
			return renderChild(child, props);
		}
		return child;
	});
}

function renderChild(child, props) {
	const childChildren = child.props.children;
	const contextProps = {
		style: {
			...Style.toolbarItem,
			...getItemAxisBasedStyle(props.axis)
		}
	};
	return cloneElement(child, contextProps, childChildren);
}

function getItemAxisBasedStyle(axis) {
	return axis === "horizontal" ? Style.horizontal : Style.vertical;
}

Toolbar.propTypes = {
	children: PropTypes.node,
	floating: PropTypes.bool,
	axis: PropTypes.oneOf([
		"horizontal",
		"vertical"
	]),
	style: PropTypes.object,
	className: PropTypes.string,
	left: PropTypes.number,
	top: PropTypes.number
};

Toolbar.defaultProps = {
	floating: false,
	axis: "horizontal",
	className: "",
	left: 0,
	top: 0
};

export default radium(Toolbar);
