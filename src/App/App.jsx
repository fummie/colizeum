import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Clash from '../views/Clash/';

import "./App.scss"

const App = () => {
	return(
		<Switch>
			<Route path="/">
				<Clash/>
			</Route>
		</Switch>
	);
};

export default App;
