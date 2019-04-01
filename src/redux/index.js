import { combineReducers } from 'redux';

import { auth } from './auth/auth.reducer.js';

export default combineReducers({
	auth,
});
