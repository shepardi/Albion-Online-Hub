// Bring in Mongoose
const mongoose = require('mongoose');

// Bring .enffile
// require('dotenv").config();

//connect to mongodb
const connectionString = "mongodb://localhost:27017/Albion-Online-Hub";
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    userCreateIndex: true,
    useFindAndModify: false
}).then(function () {
    console.log('mongoose connected');
}).catch(function (error) {
    console.log(error);
});

mongoose.connection.on('disconnected', function () {
    console.log('mongoose disconnected');
});

//export moduels
module.exports = {
    Character: require('./Character'),
    Account: require('./Account'),
}