export interface IAuthState {
	isAuthorized: boolean;
	userName: string;
}

const initialState: IAuthState = {
	isAuthorized: false,
	userName: '',
};

/*tslint:disable:variable-name*/

export const AuthActionTypes = {
	SetAuthInfo: 'SET_AUTH_INFO',
};

/*tslint:enable:variable-name*/

export function auth(state: IAuthState = initialState, action): IAuthState {
	switch (action.type) {
	case AuthActionTypes.SetAuthInfo:
		return {
			...state,
			isAuthorized: action.data.isAuthorized,
			userName: action.data.userName,
		};
	default:
		return state;
	}
}
