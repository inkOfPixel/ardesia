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
		<StackLayout
			spacing="15px"
		>
			<section>
				<h3>TextField</h3>
<<<<<<< HEAD
				<hr></hr>
=======
>>>>>>> 99aa2d373e8f0eb16614f1189e4d9071ae932a45
				<TextField />
			</section>
			<section>
				<h3>Buttons</h3>
<<<<<<< HEAD
				<hr></hr>
=======
>>>>>>> 99aa2d373e8f0eb16614f1189e4d9071ae932a45
				<StackLayout
					spacing="5px"
				>
					<div>
						<h4>Sizes</h4>
						<StackLayout
							axis="horizontal"
							spacing="10px"
							align="end"
						>
							<Button size="large">Large</Button>
							<Button>Normal</Button>
							<Button size="small">Small</Button>
							<Button size="extraSmall">Extra Small</Button>
						</StackLayout>
					</div>
					<div>
						<h4>Fill buttons</h4>
						<StackLayout
							axis="horizontal"
							spacing="10px"
							align="end"
						>
							<Button>Primary</Button>
							<Button actionType="success">Success</Button>
							<Button actionType="warning">Warning</Button>
							<Button actionType="danger">Danger</Button>
						</StackLayout>
					</div>
					<div>
						<h4>Hollow buttons</h4>
						<StackLayout
							axis="horizontal"
							spacing="10px"
							align="end"
						>
							<Button
								type="hollow"
							>
								Primary
							</Button>
							<Button
								actionType="success"
								type="hollow"
							>
								Success
							</Button>
							<Button
								actionType="warning"
								type="hollow"
							>
								Warning
							</Button>
							<Button
								actionType="danger"
								type="hollow"
							>
								Danger
							</Button>
						</StackLayout>
					</div>
					<div>
						<h4>Link buttons</h4>
						<StackLayout
							axis="horizontal"
							spacing="10px"
							align="end"
						>
							<Button
								type="link"
							>
								Primary
							</Button>
							<Button
								actionType="success"
								type="link"
							>
								Success
							</Button>
							<Button
								actionType="warning"
								type="link"
							>
								Warning
							</Button>
							<Button
								actionType="danger"
								type="link"
							>
								Danger
							</Button>
<<<<<<< HEAD

=======
							
>>>>>>> 99aa2d373e8f0eb16614f1189e4d9071ae932a45
						</StackLayout>
					</div>
				</StackLayout>
			</section>
		</StackLayout>
	</div>
);

export default App;
