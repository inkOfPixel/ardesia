/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

import React, { PropTypes, Component } from "react";
import {
	Editor,
	EditorState,
	convertFromRaw
} from "draft-js";
import RichText from "../RichText";

class RichTextArea extends Component {
	constructor(props) {
		super(props);

		const { value } = props;

		this.state = {
			editorState: createEditorState(value.raw)
		};

		this.focus = () => this.refs.editor.focus();
		this.blur = () => this.refs.editor.blur();
	}

	componentDidMount() {
		const { focus } = this.props;

		if (focus) {
			this.focus();
		} else {
			this.blur();
		}
	}

	componentWillReceiveProps(nextProps) {
		const { focus } = nextProps;

		if (focus) {
			this.focus();
		} else {
			this.blur();
		}
	}

	render() {
		const { readOnly, placeholder } = this.props;
		const state = this.state;
		return (
			<Editor
				className="RichTextArea"
				editorState={state.editorState}
				readOnly={readOnly}
				placeholder={placeholder}
				onChange={editorState => this.setState({ editorState })}
				ref="editor"
			/>
		);
	}
}

RichTextArea.propTypes = {
	focus: PropTypes.bool,
	readOnly: PropTypes.bool,
	placeholder: PropTypes.string,
	value: PropTypes.instanceOf(RichText)
};

RichTextArea.defaultProps = {
	readOnly: false,
	focus: false,
	value: RichText.createEmpty()
};

function createEditorState(raw) {
	const contentState = convertFromRaw(raw);
	return EditorState.createWithContent(contentState);
}

export default RichTextArea;
