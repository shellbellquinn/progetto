const db = require('../models');

module.exports = app => {

    app.get('/api/boards', (req, res) => {
        db.Board.findAll().then(dbBoard => {
            res.json(dbBoard);
        })
    });

    app.post('/api/boards', (req, res) => {
    	// console.log(req.body);
        db.Board.create(req.body).then(dbBoard => {
            res.json(dbBoard);
        })
    });

    app.put('/api/boards/', (req, res) => {
        db.Board.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(dbBoard => {
            res.json(dbBoard)
        })
    });

    app.delete('./api/boards/:id', (req, res) => {
        db.Board.destroy(req.body, {
            where: {
                id: req.params.id
            }
        }).then(dbBoard => {
            res.json(dbBoard);
        })
    });
}