const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileTextSchema = new Schema({
    profileText: String
});

const profileText = mongoose.model('profileText', profileTextSchema);
module.exports = profileText;