// bring in mongoose
const mongoose = require('mongoose');

// set up Schema
const accountSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    ig_name: {
        type: String,
        required: true,
        unique: true
    },
    guild: {
        type: String,
        required: true
    },
    // Groups: contains array of form objects that others can click to edit the information

});

// Set up model
const Account = mongoose.model('Account', accountSchema)

// module.exports makes data available outside of file!
module.exports = Account;