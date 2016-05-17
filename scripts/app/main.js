/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

import React from "react";
import { render } from "react-dom";
import App from "./App";

window.addEventListener("load", () => {
	const appContainer = document.getElementById("app");
	render(<App />, appContainer);
});
