// bring in mongoose
const mongoose = require('mongoose');

// set up Schema
const accountSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    ig_name: {
        type: String,
        require: true,
        unique: true
    },
    guild: {
        type: String,
        require: true
    },

})

// Set up model
const Account = mongoose.model('Account', accountSchema)

// module.exports makes data available outside of file!
module.exports = Account;