const express = require('express');
const db = require('../models/index');

const router = express.Router();

// Routes
router.get('/', (req, res) => {
    const context = {
        user: req.session.currentUser,
    };
    res.render('account', context);
});


//Export file
module.exports = router;