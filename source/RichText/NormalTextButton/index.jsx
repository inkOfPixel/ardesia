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

const BLOCK_TYPE = "unstyled";

const NormalTextButton = ({ editorState, onChange, children, style }) => {
	const blockType = getBlockType(editorState);
	const active = blockType === BLOCK_TYPE;
	return (
		<button
			className="NormalTextButton"
			style={[
				Style.base,
				!active && Style.normal,
				active && Style.active,
				style
			]}
			onMouseDown={event => handleMouseDown({ event, editorState }, onChange)}
		>
			{children}
		</button>
	);
};

NormalTextButton.propTypes = {
	editorState: PropTypes.instanceOf(EditorState),
	children: PropTypes.node,
	onChange: PropTypes.func,
	style: PropTypes.object
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

export default radium(NormalTextButton);
