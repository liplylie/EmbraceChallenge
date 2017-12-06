const app = require('../server.js')
const router = require('express').Router()
const controller = require('../controller/controller.js')

router.get('/getFavoriteDogs', controller.getFavoriteDogs)
router.post('/addFavoriteDog', controller.addFavoriteDog)

module.exports = router