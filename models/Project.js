const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    projectId: String,
    projectName: String,
    projectDate: Number,
    projectManager: String,
    projectDescription: String,
    projectId:  { type: Schema.Types.ObjectId, ref: 'Projects' }
});

const Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;
