const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const profileSchema = new Schema({
    name: String,
    dateOfBirth: String,
    location: String,
    team: String,
    gender: String,
    about: String,
    profileImage: String,
    sports: String
}, {timestamps: true});

module.exports = mongoose.model('profiles', profileSchema);