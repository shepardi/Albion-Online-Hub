const express = require('express');
const db = require('../models/index');

// Route Handler
const router = express.Router();

//index
router.get('/', (req, res) => {
    db.GroupForm.find({}, (err, foundGroupForms) => {
        const context = {
            groupForms: foundGroupForms,
        }
        res.render('groupCreate/index', context);
    });
});

//new - just a form to make groups
router.get('/new', (req, res) => {
    res.render('groupCreate/new')
});

//create - takes information from the form and puts it into our database
router.post('/', (req, res) => {
    db.GroupForm.create(req.body, (err, createdGroupForm) => {
        res.redirect('/groupCreate');
    })
});

//show - brings us to a new page and shows the details
router.get('/:id', (req, res) => {
    db.GroupForm.findById(req.params.id, (err, foundGroupForm) => {
        let context = {
            groupForm: foundGroupForm,
        }
        res.render('groupCreate/show', context);

    })
})


//delete - deletes the object in out database @ id
router.delete('/:id', (req, res) => {
    db.GroupForm.findByIdAndRemove(req.params.id, () => {
        res.redirect('/groupCreate');
    });
});

// Edit
router.get('/:id/edit', (req, res) => {
    db.GroupForm.findById(req.params.id, (err, foundGroupForm) => {
        res.render('groupCreate/edit', { groupForm: foundGroupForm })
    })
})

// Update
router.put('/:id', (req, res) => {
    db.GroupForm.findByIdAndUpdate(req.params.id, req.body, () => {
        res.redirect('/groupCreate');
    });
});

module.exports = router;