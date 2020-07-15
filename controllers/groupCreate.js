// Express files needed to be available to this file
const express = require('express');
const db = require('../models/index');

// Handles our Routes
const router = express.Router();

//index route
router.get('/', function (req, res) {

    res.render('groupCreate');
});

//new route

//create route

//show route

//edit route

//update route

//delete route

//export the file

module.exports = router;