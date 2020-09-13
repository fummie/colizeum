import React, { useState } from "react";
import { InputGroup, DropdownButton, Dropdown, FormControl, Form, Col, Button } from "react-bootstrap";
import { servers } from "./servers";

import "./Smart-search.scss";

const SmartSearch = () => {
	const [server, setServer] = useState(servers[0]);

	const serverSelect = (userServer) => {
		setServer(userServer);
	};

	const search = (event) => {
		event.preventDefault();
		const input = document.getElementById("input-group-form-1").value;
		console.log(`server: ${server.id}\ninput: ${input}`);
	};

	return(
		<Form>
			<Form.Row>
				<Col>
					<InputGroup className="mb-3" size="lg">
						<DropdownButton
							as={InputGroup.Prepend}
							variant="outline-secondary"
							title={server.name}
							id="input-group-dropdown-1"
						>
							{servers.map((el) => { return(
								<Dropdown.Item key={el.id} onSelect={() => {serverSelect(el)}}>
									{el.name}
								</Dropdown.Item>)})}
						</DropdownButton>
						<FormControl 
							aria-describedby="basic-addon1"
							placeholder="Summoner or Team name"
							id="input-group-form-1"
						/>
					</InputGroup>
				</Col>
				<Col xs="auto">
					<Button 
						type="submit"
						className="mb-2"
						size="lg"
						onClick={search}
					>
						Go!
					</Button>
				</Col>
			</Form.Row>
		</Form>
	);
};

export default SmartSearch;
