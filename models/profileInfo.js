const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileInfoSchema = new Schema({
    profileName: String,
    profileTitle: String,
    profileDepartment: String,
    profilePhone: String,
    profileEmail: String,
    someWickedProperty: String,
    profileId:  { type: Schema.Types.ObjectId, ref: 'Users' }
});

const profileInfo = mongoose.model('profileInfo', profileInfoSchema);
module.exports = profileInfo;
