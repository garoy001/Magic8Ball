const { response } = require('express');
const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const magicRes = [
	'It is certain',
	'It is decidedly so',
	'Without a doubt',
	'Yes definitely',
	'You may rely on it',
	'As I see it yes',
	'Most likely',
	'Outlook good',
	'Yes',
	'Signs point to yes',
	'Reply hazy try again',
	'Ask again later',
	'Better not tell you now',
	'Cannot predict now',
	'Concentrate and ask again',
	"Don't count on it",
	'My reply is no',
	'My sources say no',
	'Outlook not so good',
	'Very doubtful',
];

app.get('/greeting/:name', (req, res) => {
	res.send(`Hello ${req.params.name}`);
});

app.get('/tip/:total/:tipPercentage', (req, res) => {
	let total = parseInt(req.params.total);
	const tipPercentage = parseInt(req.params.tipPercentage);
	const newTotal = total * (tipPercentage / 100) + total;
	res.send(`${newTotal}`);
});

app.get('/magic/:question', (req, res) => {
	const answer = Math.floor(Math.random() * 20);
	const question = req.params.question;
	res.send(`
	<html>
		<body>
			<h2>Question: ${question}</h2>
			</br>
			</br>
			<h1>Answer: ${magicRes[answer]}</h1>
		</body>
	</html>
	`);
});

app.listen(port, () => {
	console.log(`listening to port ${port}`);
});
