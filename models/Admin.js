const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt'); // SAR: We require the bcrypt package to encrypt our passwords

const Admin = {
    username: "Admin",
    password: "Admin",
    role: "admin"
};

Admin.create(Admin, function(e) {
    if (e) {
        throw e;
    }
});

// SAR: We create the Schema/table for the username and password
const AdminSchema = new Schema({
    username: {
        type: String,

    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
    }
});


// SAR: We tell Mongoose that before we save anything into the User table we execute the second function first.
AdminSchema.pre('save', function (next) {
    const admin = this;

// SAR: Now we encrypt the password a set amount of times before replacing the original password with the encrypted version.
    bcrypt.hash(admin.password,13,(error, hash) =>{
        admin.password = hash;
        next()
    })
});

// SAR: Now we create the export model
const Admin = mongoose.model('Admin',AdminSchema);
module.exports = Admin;