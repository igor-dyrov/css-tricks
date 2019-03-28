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
	}
}

export default new Validator();
