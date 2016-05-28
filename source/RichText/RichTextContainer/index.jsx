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
			selectionBoundingRect: null
		};

		this.onChange = this.onChange.bind(this);
	}

	onChange(editorState) {
		const { onChange } = this.props;
		this.setState({
			editorState,
			selectionBoundingRect: getVisibleSelectionRect(window)
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
					onChange: this.onChange,
					selectionBoundingRect: this.state.selectionBoundingRect
				};
				return cloneElement(child, contextProps, childChildren);
			}
			return child;
		});
	}

	render() {
		const { children } = this.props;
		return (
			<div
				className="RichTextContainer"
			>
				{this.renderChildren(children)}
			</div>
		);
	}
}

RichTextContainer.propTypes = {
	editorState: PropTypes.instanceOf(EditorState),
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element)
	]),
	onChange: PropTypes.func
};

RichTextContainer.defaultProps = {
	editorState: EditorState.createEmpty()
};

export default RichTextContainer;
