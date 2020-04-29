const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileInfoSchema = new Schema({
    profileName: String,
    profileTitle: String,
    profileDepartment: String,
    profilePhone: String,
    profileEmail: String,
    profileText: String,
    profileSkills: String,
    profileImage: String
});


const profileInfo = mongoose.model('userInfo', profileInfoSchema);
module.exports = profileInfo;

