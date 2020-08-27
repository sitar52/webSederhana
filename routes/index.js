const express = require('express')
const Controller = require('../controller/controller')

const router = express.Router()

router.get('/', Controller.rootHandler)

router.get('/login', Controller.loginHandler )
router.post('/login', Controller.postLoginHandler)



module.exports = router