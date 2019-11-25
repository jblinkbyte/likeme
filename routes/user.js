const express = require('express')
const router = express.Router()

const userController = require('../controllers/user')
router.get('/users', userController.getUsers)
router.get('/:id', userController.getUser)

router.post('/add-user', userController.addUser)

router.delete('/remove-user/:id', userController.removeUser)

router.put('/update-user/:id', userController.updateUser)


module.exports = router