const { Router } = require('express');
const pool = require('../db');

const router = Router();

// get all monsters
router.get('/', (request, response, next) => {
	pool.query('SELECT * FROM monsters ORDER BY id ASC', (err, res) => {
		if (err) {
			return next(err); //looks for next middleware and sends err there
		}
		response.json(res.rows);
	});
});

// get one monster by id
router.get('/:id', (request, response, next) => {
	const { id } = request.params;
	pool.query('SELECT * FROM monsters WHERE monsters.id = $1', [id], (err, res) => {
		if(err) {
			return next(err);
		}
		response.json(res.rows);
	})
});

module.exports = router;