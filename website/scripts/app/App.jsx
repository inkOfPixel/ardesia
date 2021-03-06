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
			<section className="textfield">
				<h3>TextField</h3>
				<hr></hr>
				<TextField />
			</section>
			<section className="buttons">
				<h3>Buttons</h3>
				<hr></hr>
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
						</StackLayout>
					</div>
				</StackLayout>
			</section>
			<section className="stacklayout">
				<h3>StackLayout</h3>
				<hr></hr>
				<StackLayout
					spacing="5px"
				>
					<div>
						<h4>Vertical</h4>
						<StackLayout
							axis="vertical"
							spacing="1px"
							className="prova"
						>
							<div className="box"></div>
							<div className="box"></div>
							<div className="box"></div>
							<div className="box"></div>
							<div className="box"></div>
						</StackLayout>
					</div>
					<div>
						<h4>Horizontal</h4>
						<StackLayout
							axis="horizontal"
							spacing="1px"
						>
							<div className="box"></div>
							<div className="box"></div>
							<div className="box"></div>
							<div className="box"></div>
							<div className="box"></div>
						</StackLayout>
					</div>
				</StackLayout>
			</section>
		</StackLayout>
	</div>
);

export default App;
