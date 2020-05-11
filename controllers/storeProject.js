const project = require('../models/Project');
const path = require('path');

/*
module.exports = (req, res) => {
    project.findOneAndUpdate({}, req.body, (error, result) => {
        console.log('opdaterer projekt');
        if (result == null) {
            project.create(req.body, (error, project) => {
                console.log('Created project instead');
            });
        }
        res.redirect('projectPage')
    });
}

når koden er eksekveret returnerer/sender den brugeren til projectPage */