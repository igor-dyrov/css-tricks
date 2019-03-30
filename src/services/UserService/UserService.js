const urlBack = 'http://localhost:8000/api';

class UserService {
	constructor() {
		this._isAuth = false;
		this._clearUserData();
	}

	_clearUserData() {
		this.userInfo = {
			login: '',
			email: '',
			score: '',
		};
	}

	static _handleAuthRequest(method, address, body) {
		const url = `${urlBack}${address}`;
		const fPar = {
			method: method,
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

	login(body) {
		return UserService._handleAuthRequest('POST', '/session', body);
	}
}

export default new UserService();
