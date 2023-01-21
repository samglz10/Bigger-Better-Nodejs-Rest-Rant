/*Express JS use express.Router class to create modular and mountable route handlers. 
The Router instance also known as Mini-app, is a complete middleware routing system in ExpressJS.*/
const router = require('express').Router()
	
// by removing app and replacing with router.get - this will router to /places/ - no need to specify because router uses the file name
router.get('/', (req, res) => {

    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
      }]
      
    res.render('places/index', {places})
})

//New Place Route
router.get('/new',(req,res) => {
    res.send('places/new')
})
//New Place Route - dynamic ID
router.get('/:id',(req,res) => {
    res.send('places/:id')
})
//New Edit Place Route - dynamic ID
router.get('/:id/edit',(req,res) => {
    res.send('places/:id/edit')
})

module.exports = router