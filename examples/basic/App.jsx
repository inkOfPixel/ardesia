/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

import React, { Component } from "react";
import {
	TextField,
	StackLayout,
	Button,
	CheckBox
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
				<h3>TextField</h3>
				<StackLayout
					spacing="3px"
				>
					<TextField />
					<TextField />
				</StackLayout>
				<h3>Buttons</h3>
				<StackLayout
					axis="horizontal"
					align="center"
					spacing="3px"
				>
					<Button
						type="hollow"
						size="large"
					>
						Default button
					</Button>
					<Button
						actionType="success"
						size="normal"
					>
						Default button
					</Button>
					<Button
						actionType="warning"
						size="small"
					>
						Default button
					</Button>
					<Button
						actionType="danger"
						size="extraSmall"
					>
						Default button
					</Button>
					<Button
						type="link"
						actionType="danger"
					>
						Default button
					</Button>

				</StackLayout>

				<h3>CheckBox</h3>
				<CheckBox
					value={this.state.checkBoxValue}
					onChange={event => this.onCheckBoxChange(event)}
				/>
			</div>
		);
	}
}

export default App;
