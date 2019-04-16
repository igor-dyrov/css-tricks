import * as React from 'react';
import { Route, Switch } from 'react-router';

import Main from './containers/Main/Main.jsx';
import SignIn from './containers/SignIn/SignIn.jsx';

export const PATHS = {
	MENU: '/',
	SIGN_IN: '/login',
	SIGN_UP: '/register',
	ERROR: '/404',
};

export const routes = [
	<Route exact path={PATHS.MENU} component={Main}/>,
	<Route exact path={PATHS.SIGN_IN} component={SignIn}/>
];
