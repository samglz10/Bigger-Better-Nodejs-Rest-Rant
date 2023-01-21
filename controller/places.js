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
        pic: '/images/thai.png'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/catcafe.png'
      }]
      
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

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
  })
  
module.exports = router