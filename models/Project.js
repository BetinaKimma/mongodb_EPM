const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    projectId: String,
    projectName: String,
    projectDate: Number,
    projectManager: String,
    projectDescription: String,
    profileId:  { type: Schema.Types.ObjectId, ref: 'Users' }
});

const Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;
