const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileImageSchema = new Schema({
    profileId: Number,
    profileImage: String
});

const profileImage = mongoose.model('profileImage', profileImageSchema);
module.exports = profileImage;
