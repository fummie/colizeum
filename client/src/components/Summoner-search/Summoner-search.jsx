import React, { useState } from "react";
import { InputGroup, FormControl, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addSummoners } from "../../redux/actions/summoners";
import { addTeam } from "../../redux/actions/team";

import RegionSelector from "../Region-selector";

import "./Summoner-search.scss";
import regions from "../../data/regions.json";

const SummonerSearch = () => {
	const [region, setRegion] = useState(regions[0]);
	const dispatch = useDispatch();
	const summoners = useSelector(state => state.summoners);
	const team = useSelector(state => state.team);
	const server = "http://localhost:8000";

	const onSummonerSearch = async (event) => {
		event.preventDefault();
		const summonerName = document.getElementById("input-group-form-1").value;

		const summonerID = await getSummonerID(summonerName);
		const teamID = await getTeamID(summonerID);
		const team = await getTeam(teamID);
		const summoners = await getTeamSummoners(team);

		setReduxState(team, summoners);
	};

	const getSummonerID = async (summonerName) => {
		const summoner = await fetchRiotAPI("/lol/summoner/v4/summoners/by-name/", summonerName);
		return summoner["id"];
	};

	const getTeamID = async (summonerID) => {
		const teamMember = await fetchRiotAPI("/lol/clash/v1/players/by-summoner/", summonerID);
		return teamMember["teamId"];
	};

	const getTeam = async (teamID) => {
		const team = await fetchRiotAPI("/lol/clash/v1/teams/", teamID);
		return team;
	};

	const getTeamSummoners = async (team) => {
		let summonersIDs = [];
		team["players"].map(player => summonersIDs.push(player["summonerId"]));
		let summoners = [];
		summonersIDs.map(async summonerID => {
			const summoner = await fetchRiotAPI("/lol/summoner/v4/summoners/", summonerID)
			summoners.push(summoner);
		});
		return summoners;
	};

	const fetchRiotAPI = async (operation, data) => {
		try {
			const body = {operation, data};
			const request = await fetch(server, {
				method: "POST",
				headers: {
					'Content-Type': 'application/json;charset=utf-8'
				},
				body: JSON.stringify(body)
			});
			data = await request.json();
			return data;
		} catch(err) {
			console.error(err);
		};
	}

	const setReduxState = (team, summoners) => {
		dispatch(addSummoners(summoners));
		dispatch(addTeam(team));
	};

	return(
		<Form>
			<InputGroup className="mb-3" size="lg">

				<RegionSelector 
					regions={regions} 
					region={region} 
					setRegion = {setRegion}
				/>

				<FormControl 
					aria-describedby="basic-addon1" 
					placeholder="Summoner name" 
					id="input-group-form-1"
				/>

				<InputGroup.Append>
					<Button type="submit" onClick={onSummonerSearch}>
						Go!
					</Button>
				</InputGroup.Append>

			</InputGroup>
		</Form>
	);
};

export default SummonerSearch;
