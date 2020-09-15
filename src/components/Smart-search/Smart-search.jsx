import React, { useState } from "react";
import { InputGroup, FormControl, Form, Col, Button } from "react-bootstrap";

import RegionSelector from "../Region-selector";

import "./Smart-search.scss";

const SmartSearch = () => {
	const regions = require("../../data/regions.json");

	const [region, setRegion] = useState(regions[0]);

	const search = (event) => {
		event.preventDefault();
		const input = document.getElementById("input-group-form-1").value;
		console.log(`region: ${region.name}\ninput: ${input}`);
	};

	return(
		<Form>
			<Form.Row>
				<Col>
					<InputGroup className="mb-3" size="lg">
						<RegionSelector regions={regions} region={region} setRegion = {setRegion}/>
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
