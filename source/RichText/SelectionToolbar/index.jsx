/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

import React, {
	Component,
	PropTypes
} from "react";
import radium from "radium";
import Style from "./style";

class SelectionToolbar extends Component {
	constructor(props) {
		super(props);

		this.getNode = () => this.refs.selectionToolbar;
	}

	render() {
		const { children, selectionBoundingRect } = this.props;
		return (
			<div
				className="SelectionToolbar"
				style={[
					Style.base,
					getToolbarStyle(selectionBoundingRect, this.getNode())
				]}
				ref="selectionToolbar"
			>
				{children}
			</div>
		);
	}

}

SelectionToolbar.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element)
	]),
	selectionBoundingRect: PropTypes.object
};

function getToolbarStyle(selectionBounds, node) {
	if (shouldShowToolbar(selectionBounds, node)) {
		return getToolbarPositionStyle(selectionBounds, node);
	}
	return {
		visibility: "hidden"
	};
}

function getToolbarPositionStyle(selectionBounds, node) {
	const { top, left, width } = selectionBounds;
	const toolbarWidth = node.offsetWidth;
	const toolbarHeight = node.offsetHeight;
	const maxX = window.innerWidth - toolbarWidth;
	const desiredX = left + width / 2 - toolbarWidth / 2;

	return {
		top: top - toolbarHeight,
		left: Math.max(0, Math.min(maxX, desiredX))
	};
}

function shouldShowToolbar(selectionBounds, node) {
	return selectionBounds !== null && node !== undefined && selectionBounds.width !== 0;
}

export default radium(SelectionToolbar);
