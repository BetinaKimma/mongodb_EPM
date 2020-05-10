const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileImageSchema = new Schema({
    //profileName: String,
    //profileId: Number,
    profileImage: String,
    profileId:  { type: Schema.Types.ObjectId, ref: 'Users' }
});

const profileImage = mongoose.model('profileImage', profileImageSchema);
module.exports = profileImage
