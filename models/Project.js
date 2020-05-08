const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    projectId: Number,
    projectName: String,
    projectDate: Number,
    //   projectBudget: String,
    projectDescription: String,
    //   projectLocation: String,
    //   projectDepartment: String,
    projectManager: String
});

const Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;
