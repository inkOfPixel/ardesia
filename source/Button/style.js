/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

import { rgb } from "d3";

const colors = {
	primary: rgb(46, 168, 237),
	success: rgb(145, 203, 65),
	warning: rgb(253, 183, 72),
	danger: rgb(252, 94, 75)
};

const darkerFactor = 0.2;
const alphaFactor = 0.1;

function rgba(rgbColor, alpha) {
	return `rgba(${rgbColor.r},${rgbColor.g},${rgbColor.b},${alpha})`;
}

export default {
	base: {
		border: "none",
		color: "#fff",
		outline: "none",
		cursor: "pointer"
	},
	extraSmall: {
		fontSize: "10px",
		padding: "4px 10px"
	},
	small: {
		fontSize: "11px",
		padding: "6px 12px"
	},
	normal: {
		fontSize: "12px",
		padding: "8px 15px"
	},
	large: {
		fontSize: "14px",
		padding: "10px 18px"
	},
	fillPrimary: {
		background: colors.primary.toString(),
		color: "#fff",
		boxShadow: "none",
		":hover": {
			background: colors.primary.darker(darkerFactor).toString()
		}
	},
	hollowPrimary: {
		background: "none",
		color: colors.primary.toString(),
		boxShadow: `inset 0px 0px 0px 1px ${colors.primary.toString()}`,
		":hover": {
			background: rgba(colors.primary, alphaFactor)
		}
	},
	linkPrimary: {
		background: "none",
		boxShadow: "none",
		color: colors.primary.toString(),
		":hover": {
			color: colors.primary.darker(darkerFactor).toString()
		}
	},
	fillSuccess: {
		background: colors.success.toString(),
		color: "#fff",
		boxShadow: "none",
		":hover": {
			background: colors.success.darker(darkerFactor).toString()
		}
	},
	hollowSuccess: {
		background: "none",
		color: colors.success.toString(),
		boxShadow: `inset 0px 0px 0px 1px ${colors.success.toString()}`,
		":hover": {
			background: rgba(colors.success, alphaFactor)
		}
	},
	linkSuccess: {
		background: "none",
		boxShadow: "none",
		color: colors.success.toString(),
		":hover": {
			color: colors.success.darker(darkerFactor).toString()
		}
	},
	fillWarning: {
		background: colors.warning.toString(),
		color: "#fff",
		boxShadow: "none",
		":hover": {
			background: colors.warning.darker(darkerFactor).toString()
		}
	},
	hollowWarning: {
		background: "none",
		color: colors.warning.toString(),
		boxShadow: `inset 0px 0px 0px 1px ${colors.warning.toString()}`,
		":hover": {
			background: rgba(colors.warning, alphaFactor)
		}
	},
	linkWarning: {
		background: "none",
		boxShadow: "none",
		color: colors.warning.toString(),
		":hover": {
			color: colors.warning.darker(darkerFactor).toString()
		}
	},
	fillDanger: {
		background: colors.danger.toString(),
		color: "#fff",
		boxShadow: "none",
		":hover": {
			background: colors.danger.darker(darkerFactor).toString()
		}
	},
	hollowDanger: {
		background: "none",
		color: colors.danger.toString(),
		boxShadow: `inset 0px 0px 0px 1px ${colors.danger.toString()}`,
		":hover": {
			background: rgba(colors.danger, alphaFactor)
		}
	},
	linkDanger: {
		background: "none",
		boxShadow: "none",
		color: colors.danger.toString(),
		":hover": {
			color: colors.danger.darker(darkerFactor).toString()
		}
	}
};

export const border = color => `inset 0px 0px 0px 1px ${color}`;
