const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const projectLeaderSchema= new Schema({
    fullName: String,
    lTitle: String,
    lDepartment: String,
    lTelephone: String,
    lEmailAdr: String,
    profileId: { type: Schema.Types.ObjectId, ref: 'Users'}
});

const projectLeaderInfo = mongoose.model('projectLeaderInfo', projectLeaderSchema);
module.exports = projectLeaderInfo;