/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

import React, {
	PropTypes,
	Component,
	Children,
	cloneElement
} from "react";
import radium from "radium";
import Style from "./style";
import Toolbar from "../../Toolbar";
import BlockControl from "../BlockControl";
import { RichUtils, EditorState } from "draft-js";

class BlockToolbar extends Component {
	constructor(props) {
		super(props);
		this.element = null;

		this.state = {
			menuVisible: false
		};

		this.handleRefChange = this.handleRefChange.bind(this);
		this.getActiveControl = this.getActiveControl.bind(this);
		this.handleShouldSetBlockType = this.handleShouldSetBlockType.bind(this);
		this.handleOnBlockControlMouseDown = this.handleOnBlockControlMouseDown.bind(this);
		this.handleToolbarMouseDown = this.handleToolbarMouseDown.bind(this);
		this.handleGenericMouseDown = this.handleGenericMouseDown.bind(this);
	}

	componentDidMount() {
		document.addEventListener("mousedown", this.handleGenericMouseDown);
	}

	handleGenericMouseDown() {
		this.setState({ menuVisible: false });
	}

	handleToolbarMouseDown(event) {
		event.preventDefault();
		event.stopPropagation();
		event.nativeEvent.stopImmediatePropagation();
	}

	render() {
		const { left, top } = this.toolbarPosition;
		return (
			<Toolbar
				className="BlockToolbar"
				axis="vertical"
				floating
				top={top}
				left={left}
				style={this.toolbarStyle}
				onMouseDown={this.handleToolbarMouseDown}
				ref={this.handleRefChange}
			>
				{this.renderChildren()}
			</Toolbar>
		);
	}

	get toolbarPosition() {
		const { selectedBlockElement } = this.props;
		if (selectedBlockElement && this.element) {
			return {
				left: this.blockBounds.left - this.toolbarBounds.width,
				top: this.blockBounds.top
			};
		}
		return {};
	}

	get blockBounds() {
		const { selectedBlockElement } = this.props;
		if (selectedBlockElement) {
			return selectedBlockElement.getBoundingClientRect();
		}
		return {};
	}

	get toolbarBounds() {
		if (this.element) {
			return this.element.getBoundingClientRect();
		}
		return {};
	}

	get toolbarStyle() {
		if (this.shouldShowToolbar()) {
			return {
				...Style.base,
				...(this.state.menuVisible ? Style.visible : {})
			};
		}
		return {
			visibility: "hidden"
		};
	}

	shouldShowToolbar() {
		const { selectedBlockElement } = this.props;
		return selectedBlockElement !== null && this.element !== null;
	}

	handleRefChange(component) {
		if (component !== null) {
			this.element = component.element;
		} else {
			this.element = null;
		}
	}

	handleShouldSetBlockType() {
		return this.state.menuVisible;
	}

	handleOnBlockControlMouseDown() {
		this.setState({ menuVisible: !this.state.menuVisible });
	}

	renderChildren() {
		const { menuVisible } = this.state;
		if (menuVisible) {
			return this.renderAllBlockControls();
		}
		return this.renderActiveBlockControl();
	}

	renderAllBlockControls() {
		const { children } = this.props;
		return Children.map(children, child => {
			const childChildren = child.props.children;
			const contextProps = {
				style: {
					...Style.blockControl
				},
				onMouseDown: this.handleOnBlockControlMouseDown
			};
			return cloneElement(child, contextProps, childChildren);
		});
	}

	renderActiveBlockControl() {
		const { children } = this.props;
		const blockControls = Children.toArray(children);
		const activeControl = blockControls.reduce(this.getActiveControl, null);
		const activeControlChildren = activeControl.props.children;
		const contextProps = {
			style: {
				...Style.blockControl,
				...Style.menuNotVisibleActiveControl
			},
			shouldSetBlockType: this.handleShouldSetBlockType,
			onMouseDown: this.handleOnBlockControlMouseDown
		};
		return cloneElement(activeControl, contextProps, activeControlChildren);
	}

	getActiveControl(activeControl, currentControl) {
		const { editorState } = this.props;
		const currentBlockType = RichUtils.getCurrentBlockType(editorState);
		if (
			!this.isBlockControl(activeControl) &&
			this.isControlOfType(currentControl, currentBlockType)
		) {
			return currentControl;
		}
		return activeControl;
	}

	isBlockControl(object) {
		return object instanceof BlockControl;
	}

	isControlOfType(control, type) {
		return control.props.type === type;
	}
}

BlockToolbar.propTypes = {
	selectedBlockElement: PropTypes.object,
	children: PropTypes.arrayOf(PropTypes.shape({
		type: PropTypes.oneOf([BlockControl])
	})),
	editorState: PropTypes.instanceOf(EditorState)
};

export default radium(BlockToolbar);
