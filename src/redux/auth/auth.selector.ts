import { createSelector } from 'reselect';

import { IAuthState } from './auth.reducer';

export const makeGetAuthStatus = () => createSelector((state: IAuthState) => state.isAuthorized, (isAuth) => isAuth);

export const makeGetUserName = () => createSelector((state: IAuthState) => state.userName, (userName) => userName);
