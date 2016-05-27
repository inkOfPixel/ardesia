/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

import React, { Component } from "react";
import {
	RichTextArea,
	RichTextEditor
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
				<RichTextEditor>
					<RichTextArea />
				</RichTextEditor>
			</div>
		);
	}
}

export default App;
