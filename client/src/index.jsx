import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from "./redux/store";
import App from './App';

render(
	<React.StrictMode>
		<Router>
			<Provider store={store}>
				<App/>
			</Provider>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
