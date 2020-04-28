const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserImageSchema = new Schema({
    image: String
});

const userImage = mongoose.model('userImage', UserImageSchema);
module.exports = userImage;