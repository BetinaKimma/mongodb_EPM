const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileTextSchema = new Schema({
    heading: String,
    profileText: String,
    profileId:  { type: Schema.Types.ObjectId, ref: 'Users' }
});

const profileText = mongoose.model('profileText', profileTextSchema);
module.exports = profileText