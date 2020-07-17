// Express files needed to be available to this file
const express = require('express');
const db = require('../models/index');


// Handles our Routes
const router = express.Router();


//index/new route
router.get('/', function (req, res) {
    let context = {

    }
    console.log(context.groupForm)
    res.render('groupCreate/index', context);
});

//show route
router.get('/:index', (req, res) => {
    let context = {

    }
    res.render('groupCreate/show', context);
})

//create route
router.post('/', (req, res) => {

    res.redirect('groupCreate/show')
})

//edit route


//update route

//delete route

//export the file
module.exports = router;