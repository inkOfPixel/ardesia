/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

import React, {
	PropTypes
} from "react";
import radium from "radium";
import {
	EditorState,
	RichUtils
} from "draft-js";
import Style from "./style";

const InlineControl = props => {
	const { editorState, children, textStyle } = props;
	const currentStyle = editorState.getCurrentInlineStyle();
	const active = currentStyle.has(textStyle);
	return (
		<button
			className="InlineControl"
			style={[
				Style.base,
				!active && Style.normal,
				active && Style.active
			]}
			onMouseDown={event => handleMouseDown(event, props)}
		>
			{children}
		</button>
	);
};

InlineControl.propTypes = {
	children: PropTypes.node,
	editorState: PropTypes.instanceOf(EditorState),
	onEditorStateChange: PropTypes.func,
	textStyle: PropTypes.oneOf([
		"BOLD",
		"ITALIC",
		"UNDERLINE",
		"CODE"
	]).isRequired
};

function handleMouseDown(event, props) {
	const { editorState, onEditorStateChange, textStyle } = props;
	event.preventDefault();
	const newEditorState = RichUtils.toggleInlineStyle(editorState, textStyle);
	onEditorStateChange(newEditorState);
}

export default radium(InlineControl);
