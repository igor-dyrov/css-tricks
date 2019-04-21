import { combineReducers } from 'redux';

import { auth } from './auth/auth.reducer';
import { IAppState } from '../store';

export default combineReducers<IAppState>({
	auth,
});
