const User = require('../models/User');

module.exports = (req, res) => {
  User.findById(req.params.id)
      .then(userFound => {
          if (!userFound) { return res.status(404).end(); }
          return res.status(200).json(userFound);
      })
      .catch(err => next(err));
};