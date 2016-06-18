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

const BLOCK_TYPE = "header-one";

const H1Button = ({ editorState, onChange }) => {
	const blockType = getBlockType(editorState);
	const active = blockType === BLOCK_TYPE;
	return (
		<button
			className="H1Button"
			style={[
				Style.base,
				!active && Style.normal,
				active && Style.active
			]}
			onMouseDown={event => handleMouseDown({ event, editorState }, onChange)}
		>
		H1
		</button>
	);
};

H1Button.propTypes = {
	editorState: PropTypes.instanceOf(EditorState),
	onChange: PropTypes.func
};

function getBlockType(editorState) {
	const selection = editorState.getSelection();
	const currentContent = editorState.getCurrentContent();
	const block = currentContent.getBlockForKey(selection.getStartKey());
	return block.getType();
}

function handleMouseDown(context, callback) {
	const { event, editorState } = context;
	event.preventDefault();
	const newEditorState = toggleBlockType(editorState);
	callback(newEditorState);
}

function toggleBlockType(editorState) {
	return RichUtils.toggleBlockType(editorState, BLOCK_TYPE);
}

export default radium(H1Button);
