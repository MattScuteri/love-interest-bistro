const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

module.exports: function(ajax) {
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "home.html"))
	});

	app.get("/reservation", function(req, res) {
		res.sendFile(path.join(__dirname, "reserve.html"))
	});

	app.get("/tables", function(req, res) {
		res.sendFile(path.join(__dirname, "tables.html"))
	})

	app.post("/api/new", function(req, res) {
		const newReservation = req.body;

		newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase()

		console.log(newReservation);

		if(reservation.length <= 5) {
			reservation.push(newReservation);

			res.json(newReservation);
		} else (reservation.length > 5) {
			waitingList.push(newReservation);

			res.json(newReservation);
		};
	})
}
