/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

import React, {
	Component,
	PropTypes,
	isValidElement
} from "react";
import {
	EditorState
} from "draft-js";
import radium from "radium";
import RichTextArea from "../RichTextArea";

@radium
class RichTextEditor extends Component {
	constructor(props) {
		super(props);

		this.state = {
			editorState: props.value
		};
	}

	render() {
		const { children } = this.props;
		return (
			<div className="RichTextEditor">
				{children}
			</div>
		);
	}
}

RichTextEditor.propTypes = {
	value: PropTypes.instanceOf(EditorState),
	children: (props, propName) => {
		const children = props[propName];
		const numberOfRichTextArea = getNumberOfRichTextArea(children);
		if (numberOfRichTextArea !== 1) {
			return new Error(
				`RichTextEditor must have one RichTextArea in its children. Found ${numberOfRichTextArea}.`
			);
		}
		return undefined;
	}
};

function getNumberOfRichTextArea(children) {
	if (isValidElement(children)) {
		if (children.type === RichTextArea) {
			return 1;
		}
		return getNumberOfRichTextArea(children.props.children);
	}
	if (Array.isArray(children)) {
		return children.reduce(sumTextAreaCount, 0);
	}
	return 0;
}

function sumTextAreaCount(previousCount, child) {
	return previousCount + getNumberOfRichTextArea(child);
}

export default RichTextEditor;
