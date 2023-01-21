//https://expressjs.com/en/guide/routing.html
require("dotenv").config();
//Required needed modules
const express = require('express');
//initializes the app object
const app = express();

// Express Settings
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));

//MIDDLEWARE - ROUTER
//this is a mini app where all my app.get for places will now be stored in controller/places.js
app.use('/places', require('./controller/places'));

// forward slash leads back to root or home
//req or request listens for routes
//GET ROUTES
    app.get('/',(req,res) => {
        //res.render send html jsx is the same
        res.render('home')
    })

    app.get('*',(req,res) => {
        res.render('error404')
    })


app.listen(process.env.PORT, ()=> {
    console.log('listening on http://localhost:3000/')
    console.log(process.env.PORT)
})