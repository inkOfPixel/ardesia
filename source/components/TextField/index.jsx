/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

import "./style.scss";
import React, { PropTypes } from "react";

const TextField = ({ value, className }) => (
	<input
		type="text"
		className={ `TextField ${className}` }
		value={value}
	/>
);

TextField.propTypes = {
	value: PropTypes.string,
	className: PropTypes.string
};

TextField.defaultProps = {
	value: "",
	className: ""
};

export default TextField;
