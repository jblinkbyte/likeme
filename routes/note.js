express = require('express')
const router = express.Router()

/* 
Require note controller
*/
const noteController = require('../controllers/note')


/* 
Route to get notes
*/
router.get('/notes', noteController.getNotes)
router.get('/note/:id', noteController.getNote)
/* 
Route to add note
*/

router.post('/add-note', noteController.addNote)
/* 
Route to update note
*/
router.put('/update-user/:id', noteController.updateNote)

/* 
Route to delete note
*/
router.delete('/remove-note', noteController.removeNote)

/* 
Export router
*/
module.exports = router


