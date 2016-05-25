/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

import React, { PropTypes, Component } from "react";
import {
	Editor,
	EditorState
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
			<div
				className="RichTextArea"
				style={Style.base}
			>
				<Editor
					editorState={state.editorState}
					readOnly={readOnly}
					placeholder={placeholder}
					onChange={editorState => this.setState({ editorState })}
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
	value: PropTypes.instanceOf(EditorState)
};

RichTextArea.defaultProps = {
	readOnly: false,
	focus: false,
	value: EditorState.createEmpty()
};

// function createEditorState(raw) {
// 	const contentState = convertFromRaw(raw);
// 	return EditorState.createWithContent(contentState);
// }

export default RichTextArea;
