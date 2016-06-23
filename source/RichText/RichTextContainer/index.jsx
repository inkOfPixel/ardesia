/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

import React, {
	Children,
	cloneElement,
	Component,
	isValidElement,
	PropTypes
} from "react";
import {
	EditorState,
	getVisibleSelectionRect
} from "draft-js";

class RichTextContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			editorState: props.editorState,
			selectionBoundingRect: null,
			selectedBlockElement: null
		};

		this.onChange = this.onChange.bind(this);
	}

	onChange(editorState) {
		const { onChange } = this.props;
		this.setState({
			editorState,
			selectionBoundingRect: getVisibleSelectionRect(window),
			selectedBlockElement: getSelectedBlockElement(window)
		}, () => {
			if (onChange) {
				onChange(editorState);
			}
		});
	}

	renderChildren(children) {
		return Children.map(children, child => {
			if (isValidElement(child)) {
				const childChildren = this.renderChildren(child.props.children);
				const contextProps = {
					editorState: this.state.editorState,
					onEditorStateChange: this.onChange,
					selectionBoundingRect: this.state.selectionBoundingRect,
					selectedBlockElement: this.state.selectedBlockElement
				};
				return cloneElement(child, contextProps, childChildren);
			}
			return child;
		});
	}

	render() {
		const { children } = this.props;
		return (
			<div className="RichTextContainer">
				{this.renderChildren(children)}
			</div>
		);
	}
}

RichTextContainer.propTypes = {
	editorState: PropTypes.instanceOf(EditorState),
	children: PropTypes.oneOfType([
		PropTypes.string, PropTypes.element, PropTypes.arrayOf(PropTypes.element)
	]),
	onChange: PropTypes.func
};

RichTextContainer.defaultProps = {
	editorState: EditorState.createEmpty()
};

function getSelectedBlockElement(window) {
	const selection = window.getSelection();
	if (selection.rangeCount === 0) {
		return null;
	}
	let node = selection.getRangeAt(0).startContainer;
	while (node !== null) {
		if (isBlockNode(node)) {
			return node;
		}
		node = node.parentNode;
	}
	return null;
}

function isBlockNode(node) {
	return typeof node.getAttribute === "function" && node.getAttribute("data-block") === "true";
}

export default RichTextContainer;
