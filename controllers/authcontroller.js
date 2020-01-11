var exports = (module.exports = {});
const db = require("../models")

exports.signup = (req, res)=> {
  res.render("signup");
};
exports.signin = (req, res)=> {
  res.render("signin");
};
exports.dashboard = (req, res)=> {
  const boardPromise = db.Board.findAll();

  boardPromise.then((dbBoards) => {
    res.render("dashboard", { 
      user: req.user,
      boards: dbBoards
    });
  })
};
exports.list = (req, res)=> {
  const boardPromise = db.Board.findAll();

  boardPromise.then((dbBoards) => {
    res.render("dashboard", { 
      user: req.user,
      boards: dbBoards
    });
  })
};
exports.logout = (req, res)=> {
  req.session.destroy(function(err) {
    res.redirect("/");
  });
};
