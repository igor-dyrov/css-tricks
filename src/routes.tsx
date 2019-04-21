import * as React from 'react';
import { Route, Switch } from 'react-router';

import Main from './containers/Main/Main';
import SignIn from './containers/SignIn/SignIn';

export const PATHS = {
	MENU: '/',
	SIGN_IN: '/login',
	SIGN_UP: '/register',
	ERROR: '/404',
};

export const routes = [
	<Route exact path={PATHS.MENU} component={Main} key={PATHS.MENU}/>,
	<Route exact path={PATHS.SIGN_IN} component={SignIn} key={PATHS.SIGN_IN}/>,
];
