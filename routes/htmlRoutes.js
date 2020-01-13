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
			 db.Board.findAll().then(dbBoards => {
				 console.log(req.user)
				 console.log(dbBoards)
				const userBoards = dbBoards.filter((board) => board.dataValues.createdBy == req.user.id)
				const currentBoard = userBoards.filter((board) => board.dataValues.id == BoardId)[0]

				console.log("UserBoards: " + userBoards.length)
				console.log(userBoards)
				console.log("My Current Board")
				console.log(currentBoard)

				let hbsObject = {
					list: dbList,
					BoardId: BoardId,
					BoardName: currentBoard.dataValues.name,
					user: req.user,
					boards: userBoards
				}

				res.render('list', hbsObject);

			 });
		})

	})
}