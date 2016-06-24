/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

import React, { Component } from "react";
import {
	RichTextArea,
	RichTextContainer,
	SelectionToolbar,
	InlineControl,
	BlockToolbar,
	BlockControl
} from "../../source";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			checkBoxValue: false
		};
	}

	onCheckBoxChange(event) {
		this.setState({
			checkBoxValue: event.value
		});
	}

	render() {
		return (
			<div
				className="App"
			>
				<h3>Rich Text Editor</h3>
				<RichTextContainer>
					<SelectionToolbar>
						<InlineControl textStyle="BOLD">
							B
						</InlineControl>
						<InlineControl textStyle="ITALIC">
							I
						</InlineControl>
						<InlineControl textStyle="UNDERLINE">
							U
						</InlineControl>
					</SelectionToolbar>
					<BlockToolbar>
						<BlockControl type="unstyled">T</BlockControl>
						<BlockControl type="header-one">H1</BlockControl>
					</BlockToolbar>
					<RichTextArea />
				</RichTextContainer>
			</div>
		);
	}
}

export default App;
