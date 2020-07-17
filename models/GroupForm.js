// Bring in Mongoose
const mongoose = require('mongoose');


// Set up Schema


const groupFormSchema = mongoose.Schema({
    leader: { type: String, required: true },
    enchant: { type: Number },
    tier: { type: Number },
    time: { type: Date, required: true },
    requirements: { type: String, required: true },
    slots: [{ type: String }],
    roles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
    }]
    // Roles Objects[]
})



// Set up Model
const GroupForm = mongoose.model('GroupForm', groupFormSchema);

//export file
module.exports = GroupForm;