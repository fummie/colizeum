import React from "react";
import { InputGroup, DropdownButton, Dropdown, FormControl } from "react-bootstrap";

import "./Smart-search.scss";

const SmartSearch = () => {
	return(
		<InputGroup className="mb-3">
			<DropdownButton
				as={InputGroup.Prepend}
				variant="outline-secondary"
				title="Dropdown"
				id="input-group-dropdown-1"
			>
				<Dropdown.Item>BR1</Dropdown.Item>
				<Dropdown.Item>EUN1</Dropdown.Item>
				<Dropdown.Item>EUW1</Dropdown.Item>
				<Dropdown.Item>JP1</Dropdown.Item>
				<Dropdown.Item>KR</Dropdown.Item>
				<Dropdown.Item>LA1</Dropdown.Item>
				<Dropdown.Item>LA2</Dropdown.Item>
				<Dropdown.Item>NA1</Dropdown.Item>
				<Dropdown.Item>OC1</Dropdown.Item>
				<Dropdown.Item>TR1</Dropdown.Item>
				<Dropdown.Item>RU</Dropdown.Item>
			</DropdownButton>

			<FormControl aria-describedby="basic-addon1" />
		</InputGroup>
	);
};

export default SmartSearch;
