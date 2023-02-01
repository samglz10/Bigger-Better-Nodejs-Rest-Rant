//https://expressjs.com/en/guide/routing.html
require("dotenv").config();

//Required needed modules
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
//initializes the app object
const app = express();

// Express Settings
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

//mongoose connection

mongoose.createConnection(process.env.MONGO_URI, {
    useNewUrlParser: true, useUnifiedTopology: true}, 
  )
mongoose.set('strictQuery', false);
  

//Controllers & Routes
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
})