const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

// middlewares
app.use(bodyParser.json());
app.use('/', routes);

app.use((err, req, res, next) => { // next to send data around in middlewares
	res.json(err);
}); // catch incoming errors in all routes

module.exports = app;
