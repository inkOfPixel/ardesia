/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

import React, { PropTypes } from "react";
import Style from "./style";
import radium from "radium";

const InlineTypeControl = ({ active, children, onToggle, type }) => (
	<button
		className="InlineTypeControl"
		onMouseDown={() => onToggle(type)}
		style={[
			Style.base,
			active && Style.active
		]}
	>
		{children}
	</button>
);

InlineTypeControl.propTypes = {
	active: PropTypes.bool,
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element)
	]),
	onToggle: PropTypes.func,
	type: PropTypes.string.isRequired
};

export default radium(InlineTypeControl);
