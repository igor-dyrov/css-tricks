import React from "react";
import ReactDOM from "react-dom";
import { Router } from 'react-router';
import App from "./containers/App/App.jsx";

import history from './middleware/history/history.js';
import { routes } from './routes.jsx';

ReactDOM.render(
	<Router history={ history }>
		<App routes={ routes }/>
	</Router>,
	document.getElementsByTagName('body')[0]
);