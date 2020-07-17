const express = require('express');
const db = require('../models/index');

// Route Handler
const router = express.Router();

//index
router.get('/', (req, res) => {
    db.GroupForm.find({}, (err, foundGroupForms) => {
        const context = {
            groupForms: foundGroupForms,
            user: req.session.currentUser
        }
        res.render('groupCreate/index', context);
    });
});

//new - just a form to make groups
router.get('/new', (req, res) => {
    const context = {
        user: req.session.currentUser
    }
    res.render('groupCreate/new', context)
});

//create - takes information from the form and puts it into our database
router.post('/', (req, res) => {
    db.GroupForm.create(req.body, (err, createdGroupForm) => {
        if (err) {
            console.log(error);
        } else {
            res.redirect('/groupCreate');
        }
    })
});

//show - brings us to a new page and shows the details
router.get('/:id', (req, res) => {
    db.GroupForm.findById(req.params.id, (err, foundGroupForm) => {
        if (err) {
            console.log(err);
        } else {
            let context = {
                groupForm: foundGroupForm,
                user: req.session.currentUser
            }
            res.render('groupCreate/show', context);
        }


    })
})


//delete - deletes the object in out database @ id
router.delete('/:id', (req, res) => {
    db.GroupForm.findByIdAndRemove(req.params.id, () => {
        if (err) {
            console.log(err);
        } else {
            let context = {
                groupForm: foundGroupForm,
                user: req.session.currentUser
            }
            res.redirect('/groupCreate');
        }
    });
});

// Edit
router.get('/:id/edit', (req, res) => {
    db.GroupForm.findById(req.params.id, (err, foundGroupForm) => {
        if (err) {
            console.log(err);
        } else {
            let context = {
                groupForm: foundGroupForm,
                user: req.session.currentUser
            }
            res.render('groupCreate/edit', context);
        }
    })
})

// Update
router.put('/:id', (req, res) => {
    db.GroupForm.findByIdAndUpdate(req.params.id, req.body, () => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/groupCreate');
        }
    });
});

module.exports = router;