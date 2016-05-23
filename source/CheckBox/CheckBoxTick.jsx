/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

import React, { PropTypes } from "react";
import Style from "./style";

const CheckBoxTick = ({ visible }) => {
	if (visible === false) {
		return null;
	}
	return (
		<div
			className="CheckBoxTick"
			style={{
				...Style.tick
			}}
		>
		</div>
	);
};

CheckBoxTick.propTypes = {
	visible: PropTypes.bool
};

export default CheckBoxTick;
