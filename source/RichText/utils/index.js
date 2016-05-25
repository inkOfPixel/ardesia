/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

import {
	EditorState,
	convertToRaw,
	convertFromRaw
} from "draft-js";

export function convertToRawObject(editorState) {
	const contentState = editorState.getCurrentContent();
	return convertToRaw(contentState);
}

export function convertFromRawObject(rawObject) {
	const contentState = convertFromRaw(rawObject);
	return EditorState.createWithContent(contentState);
}
