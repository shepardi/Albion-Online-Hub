const express = require('express');
const db = require('../models/index');

const router = express.Router();

// Routes
router.get('/', (req, res) => {
    res.render('account');
});


//Export file
module.exports = router;