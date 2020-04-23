const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserInfoSchema = new Schema({
    fullName: String,
    title: String,
    department: String,
    telephone: String,
    emailAdr: String
});

const userInfo = mongoose.model('userInfo', UserInfoSchema);
module.exports = userInfo;