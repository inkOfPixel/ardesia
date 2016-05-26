/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

import React, { Component, PropTypes } from "react";
import {
	EditorState
} from "draft-js";
import radium from "radium";

@radium
class RichTextEditor extends Component {
	constructor(props) {
		super(props);

		this.state = {
			editorState: props.value
		};
	}

	render() {
		return (
			<div className="RichTextEditor">
			</div>
		);
	}
}

RichTextEditor.propTypes = {
	value: PropTypes.instanceOf(EditorState)
};

export default RichTextEditor;
