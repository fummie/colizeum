import React from 'react';
import { Media } from 'react-bootstrap';

import "./Clash.scss";

const Clash = () => {
	return(
		<div className="clash">
			<Media>
				<Media.Body>
					<h1>COLIZEUM</h1>
					<p>This site is under development. It's main goal is to ease participation in the riot amateur's 
						competitions such as "clash" by providing useful information about the participating teams. 
						It will use the riot api. Possibly, I'll realize functionality to organise your own tournaments,
						 but not sure about it. Anyway, your are not supposed to find this page. pepeThink
					</p>
				</Media.Body>
			</Media>
		</div>
	);
};

export default Clash;
