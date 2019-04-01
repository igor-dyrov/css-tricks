import { combineReducers } from 'redux';

import { auth } from './auth/auth.reducer.js';
import { global } from './global/global.reducer.js';

export default combineReducers({
	auth,
	global
});
