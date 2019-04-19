import { AuthActionTypes } from './auth.reducer.ts';

export default function setAuthInfo(data) {
	return {
		type: AuthActionTypes.SetAuthInfo,
		data: data,
	};
}
