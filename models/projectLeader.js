const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const projectLeaderSchema= new Schema({
    fullName: String,
    lTitle: String,
    lDepartment: String,
    lTelephone: String,
    lEmailAdr: String,
});

const projectLeader = mongoose.model('projectLeader', projectLeaderSchema);
module.exports = projectLeader;