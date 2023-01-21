//https://expressjs.com/en/guide/routing.html

//Require needed modules
const express = require('express') 
//initializes the app object
const app = express() 

// forward slash leads back to root or home
//req or request listens for routes
app.get('/',(req,res) => {
    res.send('Home')
})

app.listen(3000, ()=> {
    console.log('listening on http://localhost:3000/')
})