const express = require('express');
const monsters = require('./routes/monsters');

const app = express();


// middlewares
app.use('/monsters', monsters);

app.use((err, req, res, next) => { // next to send data around in middlewares
	res.json(err);
}); // catch incoming errors in all routes

module.exports = app;
