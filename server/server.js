const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const cors = require('cors');
const delay = require('express-delay');

const app = express();
// Delay all responses for 1 second
app.use(delay(750));
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017";

let cur = 0, tokenCur = 0;

const balances = {
	0: 1000,
	1: 10,
};

const tokens = {};

const RESPONSE_CODES = {
	OK: 200,
	FORBIDDEN: 403,
	NOT_AUTHORIZED: 401,
	CONFLICT: 409
};

app.use('/profile', express.static(__dirname));

app.use('/cookie', (req, res) => {
	res.set('Access-Control-Allow-Origin', '*');
	res.set('Access-Control-Allow-Credentials', 'true');
	
	res.set('Set-Cookie', `session_id=${cur}; HttpOnly`);
	cur++;
	
	res.status(RESPONSE_CODES.OK);
	res.end();
});

app.use('/token', (req, res) => {
	const cookie = req.get('Cookie');
	const session = cookie && cookie.split('=')[1].substr(0, 1);
	
	if (!isNaN(balances[session])) {
		res.status(RESPONSE_CODES.OK);
		
		const token = `${tokenCur}${tokenCur + 1}`;
		tokens[session] = token;
		
		res.json({ token });
		tokenCur += 2;
	} else {
		res.status(RESPONSE_CODES.FORBIDDEN);
		res.end();
	}
});

app.use('/transfer', (req, res) => {
	res.set('Access-Control-Allow-Origin', '*');
	res.set('Access-Control-Allow-Credentials', 'true');
	
	const to = req.query.to;
	const amount = req.query.amount;
	
	const cookie = req.get('Cookie');
	const session = cookie && cookie.split('=')[1].substr(0, 1);
	console.log(session);
	
	if (balances[session] >= amount) {
		balances[session] -= +amount;
		balances[to] += +amount;
		res.status(RESPONSE_CODES.OK);
	} else {
		res.status(RESPONSE_CODES.FORBIDDEN);
	}

	res.end();
});

app.use('/transaction', express.static(__dirname + '/transaction.html'));

app.post('/safe', (req, res) => {
	res.set('Access-Control-Allow-Origin', 'http://localhost:7000');
	res.set('Access-Control-Allow-Credentials', 'true');
	
	const cookie = req.get('Cookie');
	const session = cookie && cookie.split('=')[1].substr(0, 1);
	const token = req.headers['x-csrf-token'];
	
	if (token && tokens[session] === token && !isNaN(balances[session]) && balances[0] >= req.body.amount) {
		delete tokens[session];
		
		balances[0] -= +req.body.amount;
		balances[1] += +req.body.amount;
		res.status(RESPONSE_CODES.OK);
	} else {
		res.status(RESPONSE_CODES.FORBIDDEN);
	}
	
	res.end();
});

app.options('/safe', (req, res) => {
	res.status(RESPONSE_CODES.OK);
	res.set('Access-Control-Allow-Origin', 'http://localhost:7000');
	res.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE');
	res.set('Access-Control-Allow-Headers', 'X-PINGOTHER, Content-Type, Cookie, X-CSRF-TOKEN');
	res.set('Access-Control-Allow-Credentials', 'true');
	res.end();
});

app.use('/balance', (req, res) => {
	res.set('Access-Control-Allow-Origin', '*');
	res.set('Access-Control-Allow-Credentials', 'true');
	
	const cookie = req.get('Cookie');
	const session = cookie && cookie.split('=')[1].substr(0, 1);
	console.log(session);
	res.json({ balance: balances[session] || 0 });
	
	res.status(RESPONSE_CODES.OK);
});

app.post('/api/register', cors(), (req, res) => {
	res.set('Access-Control-Allow-Origin', '*');
	res.set('Access-Control-Allow-Credentials', 'true');
	console.log(req.body);
	if (!req.body || !req.body.login || !req.body.password) {
		res.status(RESPONSE_CODES.FORBIDDEN);
		res.json({
			message: 'Wrong request body format'
		});
	} else {
		const md5sum = crypto.createHash('md5');
		console.log(req.body.login + req.body.password);
		md5sum.update(req.body.login + req.body.password);
		MongoClient.connect(url, (err, db) => {
			if (err) throw err;
			const dbo = db.db("authDB");
			dbo.collection("sessions").findOne({login: req.body.login}, (err, result) => {
				if (!err && result) {
					res.status(RESPONSE_CODES.CONFLICT);
					res.json({
						message: 'User already exists'
					});
				} else {
					const toInsert = {};
					toInsert.login = req.body.login;
					toInsert.password = req.body.password;
					toInsert.sessionID = md5sum.digest('hex');
					dbo.collection("sessions").insertOne(toInsert, (err) => {
						if (!err) {
							res.set('Set-Cookie', `session_id=${toInsert.sessionID}`);
							res.status(RESPONSE_CODES.OK);
							res.json(toInsert);
						}
					})
				}
				db.close();
			});
		});
	}
});

app.delete('/api/session', (req, res) => {
	res.set('Access-Control-Allow-Origin', '*');
	res.set('Access-Control-Allow-Credentials', 'true');
	const date = new Date(Date.now());
	res.set('Set-Cookie',`${req.get('Cookie')}; Expires=${date.toUTCString()}`);
	res.status(RESPONSE_CODES.OK);
	res.json({
		message: 'cleared'
	});
});

app.options('/api/*', (req, res, next) => {
	res.status(RESPONSE_CODES.OK);
	res.set('Access-Control-Allow-Origin', '*');
	res.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE');
	res.set('Access-Control-Allow-Headers', 'X-PINGOTHER, Content-Type');
	res.set('Access-Control-Allow-Credentials', 'true');
	res.end();
});

app.post('/api/session', cors(), (req, res) => { //login
	res.set('Access-Control-Allow-Origin', '*');
	res.set('Access-Control-Allow-Credentials', 'true');
	if (!req.body || !req.body.login || !req.body.password) {
		res.status(RESPONSE_CODES.FORBIDDEN);
		res.json({
			message: 'Wrong request body format'
		});
	} else {
		MongoClient.connect(url, (err, db) => {
			const dbo = db.db("authDB");
			dbo.collection("sessions").findOne({login: req.body.login, password: req.body.password}, (err, result) => {
				if (!err && result) {
					res.status(RESPONSE_CODES.OK);
					res.set('Set-Cookie', `session_id=${result.sessionID}`);
					res.json(result);
				} else {
					res.status(RESPONSE_CODES.FORBIDDEN);
					res.json({
						message: 'Wrong login or password'
					});
				}
				db.close();
			});
		});
	}
});

app.use('/api/session', (req, res) => { //check auth
	res.set('Access-Control-Allow-Origin', '*');
	res.set('Access-Control-Allow-Credentials', 'true');
	const cookie = req.get('Cookie');
	console.log(cookie);
	let session;
	if (cookie) {
		session = cookie.split('=')[1];
	}
	MongoClient.connect(url, (err, db) => {
		if (err) throw err;
		const dbo = db.db("authDB");
		dbo.collection("sessions").findOne({sessionID: session}, (err, result) => {
			if (!err && result) {
				res.status(RESPONSE_CODES.OK);
				res.json(result);
			} else {
				res.status(RESPONSE_CODES.NOT_AUTHORIZED);
				res.json({
					message: 'not authorized'
				});
			}
			db.close();
		});
	});
});

app.listen(8000, () => console.log('Server running on http://localhost:8000/'));