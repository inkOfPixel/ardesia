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

const STYLE_NAME = "BOLD";

const BoldButton = ({ editorState, onChange }) => {
	const currentStyle = editorState.getCurrentInlineStyle();
	const active = currentStyle.has(STYLE_NAME);
	return (
		<button
			className="BoldButton"
			style={[
				Style.base,
				!active && Style.normal,
				active && Style.active
			]}
			onMouseDown={event => handleMouseDown({ event, editorState }, onChange)}
		>
			Bold
		</button>
	);
};

BoldButton.propTypes = {
	editorState: PropTypes.instanceOf(EditorState),
	onChange: PropTypes.func
};

function handleMouseDown(context, callback) {
	const { event, editorState } = context;
	event.preventDefault();
	const newEditorState = toggleBold(editorState);
	callback(newEditorState);
}

function toggleBold(editorState) {
	return RichUtils.toggleInlineStyle(editorState, STYLE_NAME);
}

export default radium(BoldButton);
