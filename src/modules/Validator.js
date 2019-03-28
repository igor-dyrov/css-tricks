class Validator {
	constructor() {
		this.checkConfig = {
			loginMin: (value) => /.{3}/.test(value),
			loginMax: (value) => !/.{21}/.test(value),
			passwordMin: (value) => /.{8}/.test(value),
			passwordMax: (value) => !/.{21}/.test(value),
			email: (value) => /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/i.test(value),
			russian: (value) => !/[а-яё]/i.test(value),
			passwordsEquality: (value) => value === this.inputs.password.render().value,
		};
		this.checkLists = {
			login: ['loginMax', 'loginMin', 'russian'],
			password: ['passwordMin', 'passwordMax', 'russian'],
		};
		this.errorConfig = {
			loginMin: 'Login must be at least 3 symbols long',
			loginMax: 'Login must be at most 20 symbols long',
			passwordMin: 'Password must be at least 8 symbols long',
			passwordMax: 'Password must be at most 20 symbols long',
			russian: 'Please use only latin characters',
		};
	}

	validateInput(name, value) {
		let error = '';
		this.checkLists[name].forEach((check) => {
			if (!this.checkConfig[check](value)) {
				error = check;
			}
		});
		return this.errorConfig[error];
	}
}

export default new Validator();
