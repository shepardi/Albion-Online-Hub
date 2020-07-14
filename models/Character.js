// bring in mongoose
const mongoose = require('mongoose');

// set up Schema
const characterSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    guild: {
        type: String,
        require: true
    },

})

// Set up model
const Character = mongoose.model('Character', characterSchema)

// module.exports makes data available outside of file!
module.exports = Character;