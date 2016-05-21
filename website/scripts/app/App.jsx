/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/

import React from "react";
import {
	TextField,
	Button,
	StackLayout
} from "../../../source";

const App = ({ }) => (
	<div
		className="App"
	>
		<StackLayout>
			<section>
				<h3>TextField</h3>
				<TextField />
			</section>
			<section>
				<h3>Buttons</h3>
				<Button>Hello</Button>
			</section>
		</StackLayout>
	</div>
);

export default App;
