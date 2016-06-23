/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

import React, { PropTypes } from "react";
import { EditorBlock } from "draft-js";
import radium from "radium";

const BlockWrapper = radium((props) => {
	return (
		<div
			className="BlockWrapper"
			style={{
				...props.blockProps.style,
				...props.style
			}}
			data-offset-key={props.offsetKey}
		>
			<EditorBlock {...props} />
		</div>
	);
});

export default radium(BlockWrapper);
