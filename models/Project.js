const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    projectId: Number,
    projectName: String,
    projectDate: Number,
    projectBudget: String,
    projectDescription: String,
    projectLocation: String,
    projectDepartment: String,
    projectManager: String,

});


const project = mongoose.model('project', projectSchema);
module.exports = project;
