/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

import React, { PropTypes } from "react";
import radium from "radium";
import style from "./style";

const StackLayout = ({ children, axis }) => (
	<div
		className="StackLayout"
		style={[
			style.base,
			axis === "vertical" && style.vertical,
			axis === "horizontal" && style.horizontal
		]}
	>
		{children}
	</div>
);

StackLayout.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element),
	axis: PropTypes.oneOf([
		"horizontal",
		"vertical"
	])
};

StackLayout.defaultProps = {
	axis: "vertical"
};

export default radium(StackLayout);
