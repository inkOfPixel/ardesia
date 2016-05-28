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

const STYLE_NAME = "UNDERLINE";

const UnderlineButton = ({ editorState, onChange }) => {
	const currentStyle = editorState.getCurrentInlineStyle();
	const active = currentStyle.has(STYLE_NAME);
	return (
		<button
			className="UnderlineButton"
			style={[
				Style.base,
				!active && Style.normal,
				active && Style.active
			]}
			onMouseDown={event => handleMouseDown({ event, editorState }, onChange)}
		>
			Underline
		</button>
	);
};

UnderlineButton.propTypes = {
	editorState: PropTypes.instanceOf(EditorState),
	onChange: PropTypes.func
};

function handleMouseDown(context, callback) {
	const { event, editorState } = context;
	event.preventDefault();
	const newEditorState = toggleUnderline(editorState);
	callback(newEditorState);
}

function toggleUnderline(editorState) {
	return RichUtils.toggleInlineStyle(editorState, STYLE_NAME);
}

export default radium(UnderlineButton);
