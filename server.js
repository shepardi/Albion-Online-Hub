/* -- External Modules -- */
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

/* -- Internal Modules -- */
const controllers = require('./controllers');
// const adminRequired = require('./middleware/adminRequire');
const db = require('./models/index');

/* -- Instance Module -- */
const app = express(); // returns an object to start a server

/* Global Variables */
const PORT = 4000;

/* App configuration */
app.set('view engine', 'ejs');

/* Middleware */
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

/* Session Config */
app.use(
    session({
        store: new MongoStore({
            url: 'mongodb://localhost:27017/Albion-Online-Hub',

        }),
        secret: "Albion Online",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7,
        },
    })
);

/* Controllers */
app.use('', controllers.root);

app.use('/auth', controllers.auth);

app.use('/groupCreate', controllers.groupCreate);

// auth routes

// admin routes

// ..... routes

/* -- -- -- Server Bound -- -- -- */
// Binding Server to Port
app.listen(PORT, () => {
    console.log(`Listening http://localhost:${PORT}/`)
});