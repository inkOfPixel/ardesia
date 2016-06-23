/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

import React, { PropTypes, Component } from "react";
import radium from "radium";
import Style from "./style";
import Button from "../../Button";
import {
	EditorState,
	Modifier,
	RichUtils
} from "draft-js";

const BlockControl = props => (
	<Button
		className={`BlockControl ${props.className}`}
		onMouseDown={event => handleMouseDown({ event, ...props })}
		style={{
			...Style.base,
			...(isActive(props) ? Style.active : {}),
			...props.style
		}}
	>
		{props.children}
	</Button>
);

BlockControl.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	editorState: PropTypes.instanceOf(EditorState),
	onEditorStateChange: PropTypes.func,
	type: PropTypes.oneOf([
		"unstyled",
		"header-one"
	]),
	style: PropTypes.object,
	shouldSetBlockType: PropTypes.func,
	onMouseDown: PropTypes.func
};

BlockControl.defaultProps = {
	className: "",
	onEditorStateChange: () => {},
	type: "unstyled",
	shouldSetBlockType: () => true,
	onMouseDown: () => {}
};

function handleMouseDown(context) {
	const {
		editorState,
		type,
		onEditorStateChange,
		shouldSetBlockType,
		onMouseDown,
		event
	} = context;
	onMouseDown(event);
	event.preventDefault();
	if (shouldSetBlockType(context)) {
		const contentState = editorState.getCurrentContent();
		const selectionState = editorState.getSelection();
		const newContentState = Modifier.setBlockType(contentState, selectionState, type);
		const newEditorState = EditorState.createWithContent(newContentState);
		onEditorStateChange(newEditorState);
	}
}

function isActive(props) {
	const { editorState, type } = props;
	const currentBlockType = RichUtils.getCurrentBlockType(editorState);
	return currentBlockType === type;
}

export default radium(BlockControl);
