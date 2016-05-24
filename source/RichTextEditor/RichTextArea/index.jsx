/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

import React, { PropTypes, Component } from "react";
import {
	Editor,
	EditorState
} from "draft-js";
import RichText from "../RichText";

class RichTextArea extends Component {
	constructor(props) {
		super(props);

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
		return (
			<Editor
				className="RichTextArea"
				ref="editor"
				readOnly={readOnly}
				placeholder={placeholder}
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
	focus: false
};

export default RichTextArea;
