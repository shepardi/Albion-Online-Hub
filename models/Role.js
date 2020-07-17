// Bring in Mongoose
const mongoose = require('mongoose');


// Set up Schema
const roleSchema = new mongoose.Schema({
    title: { type: String },
    slots: { type: Array }
});

// Set up model
const Role = mongoose.model('Role', roleSchema);

// Export File
module.exports = Role;