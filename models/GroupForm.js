// Bring in Mongoose
const mongoose = require("mongoose");

// Set up Schema
const groupFormSchema = new mongoose.Schema({
    map: { type: Number },
    time: { type: Date },
    requirements: { type: String },

});

// Set up model
const GroupForm = mongoose.model('GroupForm', groupFormSchema);

//export file
module.exports = GroupForm;