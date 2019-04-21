const urlBack = 'http://localhost:8000/api';

interface IUserInfo {
	login?: string;
}

interface IAuthInfo {
	login: string;
	_id: string;
	sessionID: string;
}

interface ISignInRequest {
	login: string;
	password: string;
}

interface IAuthResponse {
	ok: boolean;
	data?: IAuthInfo;
	message?: string;
}

class UserService {
	// tslint:disable:variable-name
	private _isAuth: boolean;
	private _userInfo: IUserInfo;
	// tslint:enable:variable-name
	constructor() {
		this.clearUserData();
	}
	
	private static sendAuthRequest(method: string, address: string, body: object = {}): Promise<Response> {
		const url = `${urlBack}${address}`;
		const fPar: RequestInit = {
			method,
			mode: 'cors',
			headers: {
				Host: 'localhost',
			},
			credentials: 'same-origin',
		};
		if (method !== 'HEAD' && method !== 'GET') {
			fPar.body = JSON.stringify(body);
			fPar.headers = {
				'Content-Type': 'application/json; charset=utf-8',
			};
		}
		return fetch(url, fPar);
	}
	
	public isAuth(): boolean {
		return this._isAuth;
	}
	
	public login(body: ISignInRequest): Promise<IAuthResponse> {
		return this.handleAuthResponse(UserService.sendAuthRequest('POST', '/session', body));
	}
	
	public checkAuth(): Promise<IAuthResponse> {
		return this.handleAuthResponse(UserService.sendAuthRequest('GET', '/session'));
	}
	
	public logOut(): Promise<IAuthResponse> {
		this.clearUserData();
		return this.handleAuthResponse(UserService.sendAuthRequest('DELETE', '/session'))
			.then((response) => {
				this.clearUserData();
				return response;
			});
	}
	
	private clearUserData(): void {
		this._isAuth = false;
		this._userInfo = {
			login: '',
		};
	}
	
	private handleAuthResponse(authFetch: Promise<Response>): Promise<IAuthResponse> {
		return authFetch
			.then((response) => {
				const isSuccess = response.status === 200;
				return response.json()
					.then((data) => {
						if (isSuccess) {
							this._userInfo.login = data.login;
						}
						this._isAuth = isSuccess;
						return {
							ok: isSuccess,
							message: data.message,
							data,
						};
					});
			});
	}
}

export default new UserService();
