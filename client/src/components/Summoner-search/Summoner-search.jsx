import React, { useState } from "react";
import { InputGroup, FormControl, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addSummoners } from "../../redux/actions/summoners";
import { addTeam } from "../../redux/actions/team";

import PlatformSelector from "../Platform-selector";

import "./Summoner-search.scss";
import platforms from "../../data/regions.json";

const SummonerSearch = () => {
	const [platform, setPlatform] = useState(platforms[0]);
	const dispatch = useDispatch();
	const summoners = useSelector(state => state.summoners);
	const team = useSelector(state => state.team);
	const server = "http://localhost:8000";

	const onSummonerSearch = async (event) => {
		event.preventDefault();
		const summonerName = document.getElementById("input-group-form-1").value;
		console.log(`platform: ${platform.name}\ninput: ${summonerName}`);

		const summonerId = await getSummonerId(summonerName);
		//const teamId = getTeamId(summonerId);
		//const team = getTeam(teamId);
		//const summoners = getSummoners(summonerId);

		//setReduxState(team, summoners);
	};

  const getSummonerId = async (summonerName) => {
    try {
      const req = await fetch(`${server}/api/getSummonerByName`);
      const body = await req.json()
      return body['id'];
    } catch(err) {
      console.error(err);
    }
	};

	const getTeamId = (summonerId) => {
		//server fetch get /lol/clash/v1/players/by-summoner/{summonerId}
		//server return team players list, parse any player in arrray to get teamId
		const teamId = "some_team_id";
		return teamId;
	};

	const getTeam = (teamId) => {

	};

	const getSummoners = (summonerId) => {
		const summoners = [];

		//server fetch get /lol/clash/v1/players/by-summoner/{summonerId}
		//for each player in list parse json to get summonerId
		const summonerIds = [
			"YC6wO0-7gDPkX2RwLhnRF7SI1b0Cnnf5E_5O7DLCfVz8fw",
			"XOLTrth1Jr91J-LAa4td8g7uZY0a-bmx3aST7Lb8WlZO",
			"iYe6OPrASxnIL7I1ApQm5vYvMZzt0Y34tCj98DgF6fmRREU",
			"04N_SXG22XK0kma0N8xjeNs3bhrVGa_La1PzsHwGvhg",
			"7cUro2Zs9mNMZ9HXhdcmUfSBwdMCvhr2_HJHOhiLTth35Q"
		];

		summonerIds.map(summonerId => {
			fetch(`${server}/api/getSummoner`, summonerId)
				.then(summoner => summoner.json())
				.then(summoner => summoners.push(summoner))
		});
			//server fetch get /lol/summoner/v4/summoners/{encryptedSummonerId}
			//get summoner jsons, parse to get accountIds
			//server fetch get /lol/match/v4/matchlists/by-account/{encryptedAccountId}
			//get match list and append to summoner object
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
