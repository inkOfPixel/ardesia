/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

import React, { PropTypes, Component, Children, cloneElement, isValidElement } from "react";
import radium from "radium";
import Style from "./style";
import Toolbar from "../../Toolbar";

class BlockToolbar extends Component {
	constructor(props) {
		super(props);
		this.node = null;
	}

	renderChildren(children) {
		return Children.map(children, child => {
			if (isValidElement(child)) {
				const childChildren = child.props.children;
				const contextProps = {
					style: Style.menuItem
				};
				return cloneElement(child, contextProps, childChildren);
			}
			return child;
		});
	}

	render() {
		const { selectedBlockElement, children } = this.props;
		const { left, top } = getToolbarPosition(selectedBlockElement, this.node);
		return (
			<Toolbar
				className="BlockToolbar"
				axis="vertical"
				floating
				top={top}
				left={left}
				style={[
					Style.base,
					getToolbarStyle(selectedBlockElement, this.node)
				]}
				ref={node => { this.node = node; }}
			>
				{this.renderChildren(children)}
			</Toolbar>
		);
	}

}

BlockToolbar.propTypes = {
	selectedBlockElement: PropTypes.object,
	children: PropTypes.node
};

function getToolbarPosition(currentBlock, toolbarNode) {
	if (currentBlock && toolbarNode) {
		console.log(toolbarNode);
		const blockBounds = currentBlock.getBoundingClientRect();
		const toolbarBounds = toolbarNode.getBoundingClientRect();
		return {
			left: blockBounds.left - toolbarBounds.width,
			top: blockBounds.top
		};
	}
	return {};
}

function getToolbarStyle(currentBlock, toolbarNode) {
	if (shouldShowToolbar(currentBlock, toolbarNode)) {
		return getToolbarPositionStyle(currentBlock, toolbarNode);
	}
	return {
		visibility: "hidden"
	};
}

function shouldShowToolbar(currentBlock, toolbarNode) {
	return currentBlock !== null && toolbarNode !== null;
}

function getToolbarPositionStyle(currentBlock, toolbarNode) {
	const { top, left } = currentBlock.getBoundingClientRect();
	const toolbarBounds = toolbarNode.getBoundingClientRect();
	return {
		left: `${left - toolbarBounds.width}px`,
		top: `${top}px`
	};
}

export default radium(BlockToolbar);
