import * as React from 'react';
import { Route, Switch } from 'react-router';

import Main from './containers/Main/Main';
import SignIn from './containers/SignIn/SignIn';
import BestService from './containers/BestService/BestService';

export const PATHS = {
	MENU: '/',
	SIGN_IN: '/login',
	SIGN_UP: '/register',
	BEST_SERVICE: '/bestserv',
	ERROR: '/404',
};

export const routes = [
	<Route exact path={PATHS.MENU} component={Main} key={PATHS.MENU}/>,
	<Route exact path={PATHS.SIGN_IN} component={SignIn} key={PATHS.SIGN_IN}/>,
	<Route exact path={PATHS.BEST_SERVICE} component={BestService} key={PATHS.SIGN_IN}/>,
];
