const User = require('../models/User');
const path = require('path');

module.exports = (req, res) => {
    // SAR: We want to look up the user
    // If not existing, we return 404
    User.find(c => c.id) === parseInt(req.params.id);
    if (!User) res.status(404).send('The user was not found')

    // We want to validate that user
    // If invalid, return 400 - bad request
    const { error } =


    // We want to update the user
    // Return the updated user
    User.password = req.body.name;

};