const express = require('express')
const router = express.Router()

const userController = require('../controllers/user')

router.post('/add-user', userController.addUser)

router.delete('/remove-user', userController.removeUser)

router.put('/update-user', userController.updateUser)


module.exports = router