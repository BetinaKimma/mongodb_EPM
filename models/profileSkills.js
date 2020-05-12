const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSkillsSchema = new Schema({
    education: String,
    profileSkills: String,
    profileId:  { type: Schema.Types.ObjectId, ref: 'Users' }
});

const profileSkills = mongoose.model('profileSkills', profileSkillsSchema);
module.exports = profileSkills;