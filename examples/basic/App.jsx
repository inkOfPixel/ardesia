/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

import React from "react";
import { TextField, StackLayout } from "../../source";

const App = ({ }) => (
	<div
		className="App"
	>
		<StackLayout
			spacing="3px"
		>
			<h3>TextField</h3>
			<TextField />
			<TextField />
		</StackLayout>
	</div>
);

export default App;
