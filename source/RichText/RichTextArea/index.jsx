/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

import React, { PropTypes, Component } from "react";
import {
	Editor,
	EditorState,
	RichUtils
} from "draft-js";
import radium from "radium";
import Style from "./style";
import BlockWrapper from "./BlockWrapper";

class RichTextArea extends Component {
	constructor(props) {
		super(props);

		this.focus = () => this.refs.editor.focus();
		this.blur = () => this.refs.editor.blur();
		this.handleKeyCommand = this.handleKeyCommand.bind(this);
	}

	handleKeyCommand(command) {
		const { editorState, onEditorStateChange } = this.props;
		const newEditorState = RichUtils.handleKeyCommand(editorState, command);
		if (newEditorState) {
			onEditorStateChange(newEditorState);
			return true;
		}
		return false;
	}

	render() {
		const {
			readOnly,
			placeholder,
			onEditorStateChange,
			editorState
		} = this.props;
		return (
			<div
				className="RichTextArea"
				style={Style.base}
			>
				<Editor
					editorState={editorState}
					readOnly={readOnly}
					placeholder={placeholder}
					onChange={onEditorStateChange}
					handleKeyCommand={this.handleKeyCommand}
					blockRendererFn={block => blockRenderer({ block })}
					ref="editor"
				/>
			</div>
		);
	}
}

RichTextArea.propTypes = {
	focus: PropTypes.bool,
	readOnly: PropTypes.bool,
	placeholder: PropTypes.string,
	onEditorStateChange: PropTypes.func,
	handleKeyCommand: PropTypes.func,
	editorState: PropTypes.instanceOf(EditorState)
};

RichTextArea.defaultProps = {
	readOnly: false,
	focus: false,
	onChange: () => {},
	editorState: EditorState.createEmpty()
};

function blockRenderer(options) {
	return {
		component: BlockWrapper,
		props: {
			style: Style.block
		}
	};
}

export default radium(RichTextArea);
