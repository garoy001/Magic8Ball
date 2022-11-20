const { response } = require('express');
const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/greeting/:name', (req, res) => {
	res.send(`Hello ${req.params.name}`);
});

app.get('/tip/:total/:tipPercentage', (req, res) => {
	let total = parseInt(req.params.total);
	const tipPercentage = parseInt(req.params.tipPercentage);
	const newTotal = total * (tipPercentage / 100) + total;
	res.send(`${newTotal}`);
});

app.listen(port, () => {
	console.log(`listening to port ${port}`);
});
