import { AuthActionTypes, IAuthState } from './auth.reducer';

export default function setAuthInfo(data: IAuthState) {
	return {
		type: AuthActionTypes.SetAuthInfo,
		data,
	};
}
