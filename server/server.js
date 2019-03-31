const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const errorHandler = require('errorhandler');
const cors = require('cors')

const app = express();

app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://igor:261097@localhost/";

const RESPONSE_CODES = {
	OK: 200,
	FORBIDDEN: 403,
	NOT_AUTHORIZED: 401,
	CONFLICT: 409
};

app.post('/api/register', cors(), (req, res) => {
	res.set('Access-Control-Allow-Origin', '*');
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
					dbo.collection("sessions").insertOne(toInsert, (err, result) => {
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
	res.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
	res.set('Access-Control-Allow-Headers', 'X-PINGOTHER, Content-Type');
	res.end();
});

app.post('/api/session', cors(), (req, res) => { //login
	res.set('Access-Control-Allow-Origin', '*');
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
			});
		});
	}
});

app.use('/api/session', (req, res) => { //check auth
	const session = req.get('Cookie').split('=')[1];
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
		});
	});
});

const router = express.Router();

app.listen(8000, () => console.log('Server running on http://localhost:8000/'));