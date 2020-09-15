import React, { useState } from "react";
import { InputGroup, FormControl, Form, Button } from "react-bootstrap";

import PlatformSelector from "../Platform-selector";

import "./Smart-search.scss";

const SmartSearch = () =>
{
	const platforms = require("../../data/platforms.json");

	const [platform, setPlatform] = useState(platforms[0]);

	const search = (event) => {
		event.preventDefault();
		const input = document.getElementById("input-group-form-1").value;
		console.log(`platform: ${platform.name}\ninput: ${input}`);
	};

	return(
		<Form>
			<InputGroup className="mb-3" size="lg">

				<PlatformSelector 
					platforms={platforms} 
					platform={platform} 
					setPlatform = {setPlatform}
				/>

				<FormControl 
					aria-describedby="basic-addon1" 
					placeholder="Summoner or Team name" 
					id="input-group-form-1"
				/>

				<InputGroup.Append>
					<Button type="submit" onClick={search}>
						Go!
					</Button>
				</InputGroup.Append>

			</InputGroup>
		</Form>
	);
};

export default SmartSearch;
