/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

import React from "react";
import { render } from "react-dom";
import { TextField } from "./components";

const App = ({ }) => (
	<div
		className="App"
	>
		<h3>TextField</h3>
		<TextField />
	</div>
);

const appContainer = document.getElementById("app");
render(<App />, appContainer);
