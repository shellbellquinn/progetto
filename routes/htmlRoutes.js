var path = require('path');
const db = require('../models');


module.exports = app => {
	app.get('/boards', (req, res) => {
		db.Board.findAll().then(dbBoard => {
			let hbsObject = {
				boards: dbBoard,
				user: req.user
			}

			res.render('dashboard', hbsObject);
			// res.json(dbBoard);
		});
	});

	app.get('/board/:id', (req, res) => {
		let BoardId = req.params.id
		// console.log(req.params.id)
		db.List.findAll({
			where: {
				BoardId: BoardId
			},
			include: [db.Task],
		}).then(dbList => {
			
			 db.Board.findAll().then(dbBoard => {
				let hbsObject = {
					list: dbList,
					BoardId: BoardId,
					user: req.user,
					boards: dbBoard
				}
				console.log(hbsObject)

				res.render('list', hbsObject);
				
			 });
		})

	})
}