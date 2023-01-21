/*Express JS use express.Router class to create modular and mountable route handlers. 
The Router instance also known as Mini-app, is a complete middleware routing system in ExpressJS.*/
const router = require('express').Router()
	
// More code here in a moment
router.get('/', (req, res) => {
    res.send('GET /places router')
})

module.exports = router