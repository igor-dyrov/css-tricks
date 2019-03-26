import * as React from 'react';
import { Route, Switch } from 'react-router';

import Main from './containers/Main/Main.jsx';

export const PATHS = {
	MENU: '/',
	SIGN_IN: '/login',
	SIGN_UP: '/register',
	ERROR: '/404',
};

export const routes = (
	<Switch>
		<Route exact={true} path={PATHS.MENU} component={Main}/>
	</Switch>
);
