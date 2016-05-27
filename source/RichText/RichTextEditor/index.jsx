/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

import React, {
	Component,
	PropTypes,
	isValidElement,
	Children,
	cloneElement
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

		this.onChange = editorState => this._onChange(editorState);
	}

	_onChange(editorState) {
		this.setState({ editorState });
	}

	render() {
		const { children } = this.props;
		return (
			<div className="RichTextEditor">
				{renderChildren(this, this.state, this.props)}
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

RichTextEditor.defaultProps = {
	value: EditorState.createEmpty()
};

function getNumberOfRichTextArea(children) {
	if (isValidElement(children)) {
		const element = children;
		if (isRichTextArea(element)) {
			return 1;
		}
		return getNumberOfRichTextArea(element.props.children);
	}
	if (Array.isArray(children)) {
		return children.reduce(sumTextAreaCount, 0);
	}
	return 0;
}

function sumTextAreaCount(previousCount, child) {
	return previousCount + getNumberOfRichTextArea(child);
}

function isRichTextArea(element) {
	return element.type === RichTextArea;
}

function renderChildren(parent, state, props) {
	return Children.map(props.children, child => {
		if (isValidElement(child)) {
			if (isRichTextArea(child)) {
				
			}
			const childChildren = renderChildren(parent, state, child.props);
			return cloneElement(child, {}, childChildren);
		}
		return child;
	});
}

export default RichTextEditor;
