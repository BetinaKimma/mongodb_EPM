const User = require('../models/User');

module.exports = (req, res) => {
  User.findById(req.params.id) // SAR: We want to find the specific user from the userId
      .then(userFound => {
          if (!userFound) { return res.status(404).end(); } // If no user matches the id we send, return 404)
          return res.status(200).json(userFound); // If the user was found, we respond with given user as a json file
      })
      .catch(err => next(err));
};