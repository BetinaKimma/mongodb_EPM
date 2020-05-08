const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSkillsSchema = new Schema({
    education: String,
    profileSkills: String
});

const profileSkills = mongoose.model('profileSkills', profileSkillsSchema);
module.exports = profileSkills;