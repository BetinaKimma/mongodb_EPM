const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    projectName: String,
    projectDate: Number,
    // projectBudget: String,
    projectDescription: String,
    // projectLocation: String,
    // projectDepartment: String,
    projectManager: String,
    projectId:  { type: Schema.Types.ObjectId, ref: 'Projects' }
});

const Project = mongoose.model('Project', ProjectSchema);
module.exports = Project
