const express = require('express');
const bcrypt = require('bcryptjs');

const db = require('../models/index');

const router = express.Router();

//Routes
// Register form
router.get('/register', function (req, res) {
    const context = {
        user: req.session.currentUser,
    };
    res.render('auth/register', context);
});
// Register Post
router.post('/register', async function (req, res) {
    try {
        const foundUser = await db.User.findOne({
            ig_name: req.body.ig_name
        });
        if (foundUser) {
            return res.send({
                message: 'Account is already registered'
            });
        }
        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);
        req.body.password = hash;
        const newUser = await db.User.create(req.body);
        res.redirect('login');
    } catch (err) {
        console.log(err);
        res.send({
            err,
        });
    }
})

// Login form
router.get('/login', function (req, res) {
    const context = {
        user: req.session.currentUser,
    };
    res.render('auth/login', context);
});

// Login post
router.post('/login', async function (req, res) {
    try {
        const foundUser = await db.User.findOne({
            email: req.body.email,
        });
        if (!foundUser) {
            return res.redirect('/auth/login');
        }
        const match = await bcrypt.compare(req.body.password, foundUser.password);
        if (!match) {
            return res.redirect('/auth/login');
        }
        req.session.currentUser = {
            id: foundUser._id,
            username: foundUser.username,
        };
        if (foundUser.username === 'admin') {
            res.redirect('/admin');
        } else {
            res.redirect('/');
        }
    } catch (err) {
        console.log(err);
        return res.send({
            err,
        });
    }
});

// Logout
router.delete('/logout', async function (req, res) {
    await req.session.destroy();
    res.redirect('/auth/login');
});
//Export file
module.exports = router;