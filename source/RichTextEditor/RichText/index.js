/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

import {
	EditorState,
	convertToRaw
} from "draft-js";

class RichText {
	constructor(raw) {
		if (raw !== undefined) {
			this._raw = raw;
		} else {
			this._raw = createEmptyRawRichText();
		}
	}

	static createEmpty() {
		return new RichText();
	}

	get raw() {
		return this._raw;
	}
}

function createEmptyRawRichText() {
	const editorState = EditorState.createEmpty();
	const contentState = editorState.getCurrentContent();
	return convertToRaw(contentState);
}

export default RichText;
