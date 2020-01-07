var path = require('path');
const db = require('../models');


module.exports = app=>{
	app.get('/', (req, res)=>{
		db.Board.findAll().then(dbBoard => {
			let hbsObject = {
				boards: dbBoard
			}

			res.render('index', hbsObject);
            // res.json(dbBoard);
        });
	});

	app.get('/boards', (req, res)=>{
		db.Board.findAll().then(dbBoard => {
			let hbsObject = {
				boards: dbBoard
			}

			res.render('index', hbsObject);
            // res.json(dbBoard);
        });
	});

	app.get('/board/:id', (req, res)=>{
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