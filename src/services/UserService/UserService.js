const urlBack = 'http://localhost:8000/api';

class UserService {
	constructor() {
		this._clearUserData();
	}

	_clearUserData() {
		this._isAuth = false;
		this.userInfo = {
			login: '',
		};
	}

	static _sendAuthRequest(method, address, body) {
		const url = `${urlBack}${address}`;
		const fPar = {
			method: method,
			mode: 'cors',
			headers: {
				Host: 'localhost',
			},
			credentials: 'include',
		};
		if (method !== 'HEAD' && method !== 'GET') {
			fPar.body = JSON.stringify(body);
			fPar.headers = {
				'Content-Type': 'application/json; charset=utf-8',
			};
		}
		return fetch(url, fPar);
	}

	_handleAuthResponse(_fetch) {
		return _fetch
			.then((response) => {
				const isSuccess = response.status === 200;
				return response.json()
					.then((data) => {
						this.userInfo.login = response.login;
						this._isAuth = isSuccess;
						return {
							ok: isSuccess,
							data: isSuccess ? data : data.message,
						};
					});
			});
	}

	getUserInfo(prop) {
		if (!prop) {
			return this.userInfo;
		}
		return this.userInfo[prop];
	}

	isAuth() {
		return this._isAuth;
	}

	login(body) {
		return this._handleAuthResponse(UserService._sendAuthRequest('POST', '/session', body));
	}

	checkAuth() {
		return this._handleAuthResponse(UserService._sendAuthRequest('GET', '/session'));
	}

	logOut() {
		this._clearUserData();
		return this._handleAuthResponse(UserService._sendAuthRequest('DELETE', '/session'))
			.then((response) => {
				this._clearUserData();
				return response;
			});
	}
}

export default new UserService();
