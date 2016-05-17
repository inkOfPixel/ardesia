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
	}
};

export const horizontalSpacing = value => ({
	marginLeft: value,
	marginRight: value
});

export const verticalSpacing = value => ({
	marginTop: value,
	marginBottom: value
});
