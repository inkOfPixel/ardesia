/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

export default {
	base: {
		display: "flex"
	},
	horizontal: {
		flexDirection: "row"
	},
	vertical: {
		flexDirection: "column"
	},
	alignStart: {
		alignItems: "flex-start"
	},
	alignCenter: {
		alignItems: "center"
	},
	alignEnd: {
		alignItems: "flex-end"
	},
	alignStretch: {
		alignItems: "stretch"
	}
};

export const childSpacing = {
	left: value => ({ marginLeft: value }),
	right: value => ({ marginRight: value }),
	top: value => ({ marginTop: value }),
	bottom: value => ({ marginBottom: value })
};
