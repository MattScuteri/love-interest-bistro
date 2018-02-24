const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

const reservation = [
  {

	name: "Ana",
	phone: "203-345-1232",
	email: "love@interest.com",
	uniqueId: "123-321"

  }
];

const waitingList = [
	{
		name: "",
		phone: "",
		email: "",
		uniqueId: ""
	}
];


app.listen(PORT, function() {
	console.log("App listening on Port " + PORT);
});

	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "index.html"))
	});

	app.get("/reservation", function(req, res) {
		res.sendFile(path.join(__dirname, "reservationPage.html"))
	});

	app.get("/tables", function(req, res) {
		res.sendFile(path.join(__dirname, "table.html"))
	})

	app.post("/api/new", function(req, res) {
		const newReservation = req.body;

		newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase()

		console.log(newReservation);

		if(reservation.length <= 5) {
			reservation.push(newReservation);

			res.json(newReservation);
		} else {
			waitingList.push(newReservation);

			res.json(newReservation);
		};
	})