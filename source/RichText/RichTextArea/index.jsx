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
import Style from "./style";

class RichTextArea extends Component {
	constructor(props) {
		super(props);

		this.focus = () => this.refs.editor.focus();
		this.blur = () => this.refs.editor.blur();
	}

	handleKeyCommand(command) {
		const { editorState, onChange } = this.props;
		const newEditorState = RichUtils.handleKeyCommand(editorState, command);
		if (newEditorState) {
			onChange(newEditorState);
			return true;
		}
		return false;
	}

	render() {
		const { readOnly, placeholder, onChange, editorState } = this.props;
		return (
			<div
				className="RichTextArea"
				style={Style.base}
			>
				<Editor
					editorState={editorState}
					readOnly={readOnly}
					placeholder={placeholder}
					onChange={onChange}
					handleKeyCommand={command => this.handleKeyCommand(command)}
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
	onChange: PropTypes.func,
	handleKeyCommand: PropTypes.func,
	editorState: PropTypes.instanceOf(EditorState)
};

RichTextArea.defaultProps = {
	readOnly: false,
	focus: false,
	onChange: () => {},
	editorState: EditorState.createEmpty()
};

export default RichTextArea;
