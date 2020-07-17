// Express files needed to be available to this file
const express = require('express');
const db = require('../models/index');

// Handles our Routes
const router = express.Router();

//routes
//Root Route
router.get('/', function (req, res) {
    context = {
        user: req.session.currentUser
    }
    res.render('index', context);
})
module.exports = router;