const express = require('express');
const bodyParser = require('body-parser');
const monsters = require('./routes/monsters');
const habitats = require('./routes/habitats');

const app = express();


// middlewares
app.use(bodyParser.json());
app.use('/monsters', monsters);
app.use('/habitats', habitats);

app.use((err, req, res, next) => { // next to send data around in middlewares
	res.json(err);
}); // catch incoming errors in all routes

module.exports = app;
