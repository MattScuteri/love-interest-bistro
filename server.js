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
	email: "love@interest.com"
	uniqueId: "123-321"

  }
];
