const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    title: String,
    body: String
});

const profile = mongoose.model('profile', profileSchema);

module.exports = profile



