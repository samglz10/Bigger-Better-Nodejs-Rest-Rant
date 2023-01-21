/*Express JS use express.Router class to create modular and mountable route handlers. 
The Router instance also known as Mini-app, is a complete middleware routing system in ExpressJS.*/
const router = require('express').Router()
const places = require('../models/places')
	
// by removing app and replacing with router.get - this will router to /places/ - no need to specify because router uses the file name
router.get('/', (req, res) => {
    res.render('places/index', {places})
})

//New Place Route
router.get('/new',(req,res) => {
    res.render('places/new')
})
//New Place Route - dynamic ID must be below any other variables
router.get('/:id',(req,res) => {
    res.send('places/:id')
})
//New Edit Place Route - dynamic ID
router.get('/:id/edit',(req,res) => {
    res.send('places/:id/edit')
})


//POST(CREATE) - New restaurant
router.post('/', (req, res) => {
    console.log(places)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })
module.exports = router