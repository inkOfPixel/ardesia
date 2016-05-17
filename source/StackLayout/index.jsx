/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

import React, { PropTypes, Children, cloneElement } from "react";
import radium from "radium";
import style, { horizontalSpacing, verticalSpacing } from "./style";

const StackLayout = ({ children, axis, spacing }) => (
	<div
		className="StackLayout"
		style={[
			style.base,
			axis === "vertical" && style.vertical,
			axis === "horizontal" && style.horizontal
		]}
	>
		{Children.map(children, child => {
			return cloneElement(child, { style: [
				axis === "horizontal" && spacing !== undefined && horizontalSpacing(spacing),
				axis === "vertical" && spacing !== undefined && verticalSpacing(spacing)
			] });
		})}
	</div>
);

StackLayout.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element)
	]),
	axis: PropTypes.oneOf([
		"horizontal",
		"vertical"
	]),
	spacing: PropTypes.string
};

StackLayout.defaultProps = {
	axis: "vertical"
};

export default radium(StackLayout);
