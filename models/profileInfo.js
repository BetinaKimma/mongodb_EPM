
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileInfoSchema = new Schema({
    profileId: Number,
    profileName: String,
    profileTitle: String,
    profileDepartment: String,
    profilePhone: String,
    profileEmail: String,
    profileText: String,
    profileSkills: String,
    profileImage: String
});



const profileInfo = mongoose.model('profileInfo', profileInfoSchema);
module.exports = profileInfo;

