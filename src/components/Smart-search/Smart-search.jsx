import React, { useState } from "react";
import { InputGroup, DropdownButton, Dropdown, FormControl } from "react-bootstrap";

import "./Smart-search.scss";

const SmartSearch = () => {
	const [server, setServer] = useState("RU");

	const serverSelect = (eventKey) => {
		setServer(eventKey);
	};

	return(
		<InputGroup className="mb-3" size="lg">
			<DropdownButton
				as={InputGroup.Prepend}
				variant="outline-secondary"
				title={server}
				id="input-group-dropdown-1"
				onSelect={(eventKey) => {serverSelect(eventKey)}}
			>
				<Dropdown.Item eventKey="BR1">BR1</Dropdown.Item>
				<Dropdown.Item eventKey="EUN1">EUN1</Dropdown.Item>
				<Dropdown.Item eventKey="EUW1">EUW1</Dropdown.Item>
				<Dropdown.Item eventKey="JP1">JP1</Dropdown.Item>
				<Dropdown.Item eventKey="KR">KR</Dropdown.Item>
				<Dropdown.Item eventKey="LA1">LA1</Dropdown.Item>
				<Dropdown.Item eventKey="LA2">LA2</Dropdown.Item>
				<Dropdown.Item eventKey="NA1">NA1</Dropdown.Item>
				<Dropdown.Item eventKey="OC1">OC1</Dropdown.Item>
				<Dropdown.Item eventKey="TR1">TR1</Dropdown.Item>
				<Dropdown.Item eventKey="RU">RU</Dropdown.Item>
			</DropdownButton>

			<FormControl 
				aria-describedby="basic-addon1"
				placeholder="Summoner or Team name"
			/>
		</InputGroup>
	);
};

export default SmartSearch;
