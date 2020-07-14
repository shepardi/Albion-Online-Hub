// Express files needed to be available to this file
const express = require('express');
const db = require('../models/index');

// Handles our Routes
const router = express.Router();

//routes
//Root Route
router.get('/', function (req, res) {
    res.render('index');
})
module.exports = router;