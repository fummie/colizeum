import React from "react";
import { InputGroup, DropdownButton, Dropdown } from "react-bootstrap";

import "./Platform-selector.scss";

const PlatformSelector = ({ platforms, platform, setPlatform }) => 
{
	const onPlatformSelect = (platform) => {
		setPlatform(platform);
	};

	return(
		<DropdownButton
			as={InputGroup.Prepend}
			variant="outline-secondary"
			title={platform.name}
			id="input-group-dropdown-1"
		>
			{platforms.map((platform) => { return(
				<Dropdown.Item key={platform.id} onSelect={() => {onPlatformSelect(platform)}}>
					{platform.name}
				</Dropdown.Item>)})}
		</DropdownButton>
	);
};

export default PlatformSelector;
