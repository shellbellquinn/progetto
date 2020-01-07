const db = require('../models');

module.exports = app=>{

	app.get('/api/tasks', (req, res) => {
		db.Task.findAll().then(dbList => {
			res.json(dbList);
		});
	});

	app.post('/api/tasks', (req, res) => {
		// console.log(req);
		db.Task.create(req.body).then(dbList => {
			res.json(dbList);
		});
	});

	app.put('/api/tasks', (req, res) => {
		db.Task.update(req.body, {
			where: {
				id: req.body.id
			}
		}).then(dbList => {
			res.json(dbList);
		});
	});

	app.delete('/api/tasks/:id', (req, res) => {
		db.Task.destroy(req.body, {
			where: {
				id: req.params.id
			}
		});
	});

}