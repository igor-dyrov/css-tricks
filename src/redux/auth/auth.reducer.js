const initialState = {
	isAuth: false,
	userName: ''
};

export const AuthActionTypes = {
	SetAuthInfo: 'SET_AUTH_INFO',
};

export function auth(state = initialState, action) {
	switch (action.type) {
	case AuthActionTypes.SetAuthInfo:
		return {
			...state,
			isAuth: action.dat.isAuth,
			userName: action.data.userName,
		};
	default:
		return state;
	}
}
