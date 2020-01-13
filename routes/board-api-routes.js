const db = require('../models');

module.exports = app => {

    app.get('/api/boards', (req, res) => {
        db.Board.findAll().then(dbBoard => {
            res.json(dbBoard);
        })
    });

    app.post('/api/boards', (req, res) => {
        const myPromise = db.Board.create(req.body)

        myPromise.then(dbBoard => {
            res.json(dbBoard);
        })
    });

    app.put('/api/boards', (req, res) => {
        db.Board.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(dbBoard => {
            res.json(dbBoard)
        })
    });

    app.delete('/api/boards/:id', (req, res) => {
        console.log(req)
        const boardID = req.params.id;
        console.log("I'm gonna delete this board: " + boardID)
        db.Board.destroy({
            where: {
                id: boardID
            }
        }).then(dbBoard => {
            res.json(dbBoard);
        })
    });
}