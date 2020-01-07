const db = require('../models');

module.exports = app=>{

	app.get('/api/lists', (req, res) => {
		let BoardId = req.params.id
		// console.log(req.params.id)
		db.List.findAll({
			include: [db.Task]
		}).then(dbList=>{
			res.json(dbList);
		})
	});

	app.post('/api/lists', (req, res) => {
		db.List.create(req.body).then(dbList => {
			res.json(dbList);
		});
	});

	app.put('/api/lists', (req, res) => {
		db.List.update(req.body, {
			where: {
				id: req.body.id
			}
		}).then(dbList => {
			res.json(dbList);
		});
	});

	app.delete('/api/lists/:id', (req, res) => {
		db.List.destroy(req.body, {
			where: {
				id: req.params.id
			}
		});
	});

}