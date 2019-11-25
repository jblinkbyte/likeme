const express = require('express')
const router = express.Router()

/* 
Require user controller
*/

const userController = require('../controllers/user')
/* 
Route to get users
*/
router.get('/users', userController.getUsers)
router.get('/:id', userController.getUser)
/* 
Route to add user
*/
router.post('/add-user', userController.addUser)

/* 
Route to update user
*/

router.put('/update-user/:id', userController.updateUser)
/* 
Route to delete user
*/
router.delete('/remove-user/:id', userController.removeUser)
/* 
Route to add note
*/
router.post('/add-note', userController.addNote)
/* 
Route to remove note
*/
router.delete('/remove-note', userController.removeNote)
/* 
Route to update note
*/
router.put('/update-note', userController.updateNote)
/* 
Export router
*/
module.exports = router