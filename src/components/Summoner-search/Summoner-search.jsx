import React, { useState } from "react";
import { InputGroup, FormControl, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addSummoners } from "../../redux/actions/summoners";
import { addTeam } from "../../redux/actions/team";

import PlatformSelector from "../Platform-selector";

import "./Summoner-search.scss";
import platforms from "../../data/platforms.json";


const SummonerSearch = () => {
	const [platform, setPlatform] = useState(platforms[0]);
	const dispatch = useDispatch();
	const summoner = useSelector(state => state.summoners);
	const team = useSelector(state => state.team);

	const onSummonerSearch = (event) => {
		event.preventDefault();
		const summonerName = document.getElementById("input-group-form-1").value;
		console.log(`platform: ${platform.name}\ninput: ${summonerName}`);

		const summonerId = getSummonerId(summonerName);
		const teamId = getTeamId(summonerId);
		const team = getTeam(teamId);
		const summoners = getSummoners(summonerId);

		setReduxState(team, summoners);
	};

	const getTeamId = (summonerId) => {
		//server fetch get /lol/clash/v1/players/by-summoner/{summonerId}
		//server return team players list, parse any player in arrray to get teamId
		const teamId = "some_team_id";
		return teamId;
	};

	const getSummonerId = (summonerName) => {
		//server fetch get /lol/summoner/v4/summoners/by-name/{summonerName}
		//parse server response to get summonerId
		const summonerId = "YC6wO0-7gDPkX2RwLhnRF7SI1b0Cnnf5E_5O7DLCfVz8fw";
		return summonerId;
	};

	const getTeam = (teamId) => {
		//server fetch /lol/clash/v1/teams/{teamId}
		const team = require("../../data/teamExample.json");
		return team;
	};

	const getSummoners = (summonerId) => {
		//server fetch get /lol/clash/v1/players/by-summoner/{summonerId}
		//for each player in list parse json to get summonerId
			//server fetch get /lol/summoner/v4/summoners/{encryptedSummonerId}
			//get summoner json, parse to get accountId
			//server fetch get /lol/match/v4/matchlists/by-account/{encryptedAccountId}
			//get match list and append to summoner object
			const summoners = [];
			const summoner = require("../../data/summonerExample.json");
		for (let i = 0; i < 5; i++)
			summoners.push(summoner);
		return summoners;
	};

	const setReduxState = (team, summoners) => {
		dispatch(addSummoners(summoners));
		dispatch(addTeam(team));		
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
