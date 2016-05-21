/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

import React, { PropTypes, Children, cloneElement } from "react";
import radium from "radium";
import Style, { childSpacing } from "./style";

const StackLayout = ({ children, axis, spacing, align }) => (
	<div
		className="StackLayout"
		style={[
			Style.base,
			axis === "vertical" && Style.vertical,
			axis === "horizontal" && Style.horizontal,
			getAlignStyle(align)
		]}
	>
		{
			Children.map(children, (child, index) => {
				const context = { index, length: Children.count(children) };
				return getDecoratedChild(child, context, { axis, spacing });
			})
		}
	</div>
);

function getDecoratedChild(child, context, props) {
	const { axis, spacing } = props;
	const isFirst = context.index === 0;
	const isLast = context.index === (context.length - 1);
	let style = {};
	if (isFirst) {
		style = getFirstChildStyle(axis, spacing);
	} else if (isLast) {
		style = getLastChildStyle(axis, spacing);
	} else {
		style = getChildStyle(axis, spacing);
	}

	return cloneElement(child, { style });
}

function getFirstChildStyle(axis, spacing) {
	if (spacing === undefined) {
		return {};
	}
	switch (axis) {
		case "horizontal":
			return {
				...childSpacing.right(spacing)
			};
		default:
			return {
				...childSpacing.bottom(spacing)
			};
	}
}

function getLastChildStyle(axis, spacing) {
	if (spacing === undefined) {
		return {};
	}
	switch (axis) {
		case "horizontal":
			return {
				...childSpacing.left(spacing)
			};
		default:
			return {
				...childSpacing.top(spacing)
			};
	}
}

function getChildStyle(axis, spacing) {
	if (spacing === undefined) {
		return {};
	}
	switch (axis) {
		case "horizontal":
			return {
				...childSpacing.left(spacing),
				...childSpacing.right(spacing)
			};
		default:
			return {
				...childSpacing.top(spacing),
				...childSpacing.bottom(spacing)
			};
	}
}

function getAlignStyle(align) {
	switch (align) {
		case "center":
			return Style.alignCenter;
		case "end":
			return Style.alignEnd;
		case "stretch":
			return Style.alignStretch;
		default:
			return Style.alignStart;
	}
}

StackLayout.propTypes = {
	align: PropTypes.oneOf([
		"start",
		"center",
		"end",
		"stretch"
	]),
	axis: PropTypes.oneOf([
		"horizontal",
		"vertical"
	]),
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element)
	]),
	distribution: PropTypes.oneOf([
		"start",
		"center",
		"end",
		"spaceBetween",
		"spaceAround"
	]),
	spacing: PropTypes.string
};

StackLayout.defaultProps = {
	axis: "vertical",
	align: "start",
	distribution: "start"
};

export default radium(StackLayout);
