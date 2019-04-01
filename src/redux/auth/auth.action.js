import { AuthActionTypes } from './auth.reducer.js';

export default function setAuthInfo(data) {
	return {
		type: AuthActionTypes.SetAuthInfo,
		data: data,
	};
}
