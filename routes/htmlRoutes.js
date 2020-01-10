var path = require('path');
const db = require('../models');


module.exports = app=>{
	app.get('/dashboard/boards', (req, res)=>{
		db.Board.findAll().then(dbBoard => {
			let hbsObject = {
				boards: dbBoard,
				user: req.user
			}

			res.render('dashboard', hbsObject);
            // res.json(dbBoard);
        });
	});

	app.get('dashboard/boards', (req, res)=>{
		db.Board.findAll().then(dbBoard => {
			let hbsObject = {
				boards: dbBoard
			}

			res.render('dashboard', hbsObject);
            // res.json(dbBoard);
        });
	});

	app.get('dashboard/board/:id', (req, res)=>{
		let BoardId = req.params.id
		// console.log(req.params.id)
		db.List.findAll({
			where: {
				BoardId: BoardId
			},
			include: [db.Task]
		}).then(dbList=>{
			// console.log(dbList);
			let hbsObject = {
				list: dbList,
				BoardId: BoardId
			}

			res.render('list', hbsObject);
		})
	})
}