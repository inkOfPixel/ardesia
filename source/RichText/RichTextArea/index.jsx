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

		const { value } = props;

		this.state = {
			editorState: value
		};

		this.focus = () => this.refs.editor.focus();
		this.blur = () => this.refs.editor.blur();
	}

	handleKeyCommand(command) {
		const { editorState } = this.state;
		const newEditorState = RichUtils.handleKeyCommand(editorState, command);
		if (newEditorState) {
			this.onChange(newEditorState);
			return true;
		}
		return false;
	}

	render() {
		const { readOnly, placeholder, onChange, value } = this.props;
		return (
			<div
				className="RichTextArea"
				style={Style.base}
			>
				<Editor
					editorState={value}
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
	value: PropTypes.instanceOf(EditorState)
};

RichTextArea.defaultProps = {
	readOnly: false,
	focus: false,
	onChange: () => {},
	value: EditorState.createEmpty()
};

export default RichTextArea;
