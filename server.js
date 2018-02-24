const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const ajax = require('./ajax.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

const reservation = [
  {

	name: "Ana",
	phone: "203-345-1232",
	email: "love@interest.com"
	uniqueId: "123-321"

  }
];

app.listen(PORT, function() {
	console.log("App listening on Port " + PORT);
});