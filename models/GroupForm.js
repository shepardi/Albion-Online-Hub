// Bring in Mongoose
const mongoose = require("mongoose");

// Set up Schema
const groupFormSchema = new mongoose.Schema({
    leader: { type: String },
    map: { type: Number },
    tier: { type: Number },
    time: { type: Date },
    requirements: { type: String },

});

// Set up model
const GroupForm = mongoose.model('GroupForm', groupFormSchema);

//export file
module.exports = GroupForm;