db.createUser(
	{
		user: "igor",
		pwd: "261097",
		roles: [
			{ role: "dbOwner", db: "authDB" }
		]
	}
);
db.createCollection("sessions");