//https://expressjs.com/en/guide/routing.html

//Require needed modules
const express = require('express') 
//initializes the app object
const app = express() 

// forward slash leads back to root or home
//req or request listens for routes
//GET ROUTES
    app.get('/',(req,res) => {
        res.send('Home')
    })
    //Places Route
    app.get('/places',(req,res) => {
        res.send('Places')
    })
    //New Place Route
    app.get('/places/new',(req,res) => {
        res.send('places/new')
    })
    //New Place Route - dynamic ID
    app.get('/places/:id',(req,res) => {
        res.send('places/:id')
    })
    //New Edit Place Route - dynamic ID
    app.get('/places/:id/edit',(req,res) => {
        res.send('places/:id/edit')
    })
    app.get('*',(req,res) => {
        res.send('404')
    })




app.listen(3000, ()=> {
    console.log('listening on http://localhost:3000/')
})