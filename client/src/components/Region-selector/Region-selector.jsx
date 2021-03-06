import React from "react";
import { InputGroup, DropdownButton, Dropdown } from "react-bootstrap";

import "./Region-selector.scss";

const RegionSelector = ({ regions, region, setRegion }) => 
{
	const onRegionSelect = (region) => {
		setRegion(region);
	};

	return(
		<DropdownButton
			as={InputGroup.Prepend}
			variant="outline-secondary"
			title={region.name}
			id="input-group-dropdown-1"
		>
			{regions.map((region) => { return(
				<Dropdown.Item key={region.id} onSelect={() => {onRegionSelect(region)}}>
					{region.name}
				</Dropdown.Item>)})}
		</DropdownButton>
	);
};

export default RegionSelector;
