/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

import React, { PropTypes, Component } from "react";
import radium from "radium";
import Style from "./style";

class BlockToolbar extends Component {

	constructor(props) {
		super(props);

		this.getNode = () => this.refs.selectionToolbar;
	}

	render() {
		console.log(this.props.selectedBlockElement);
		return (
			<div
				className="BlockToolbar"
				style={[
					Style.base,
					getToolbarStyle()
				]}
			>
				Hello
			</div>
		);
	}

}

function getToolbarStyle() {
	return {};
}

export default radium(BlockToolbar);
