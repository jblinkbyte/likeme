const errors = require('../util/errors')
const Note = require('../models/note')
const logger = require('../util/logger')

exports.getNotes = (req, res) => {

    Note.findAll()
        .then(notes => logger(notes))
        .then(() => { res.send('Success') })
        .catch(err => console.log(err))

}
exports.getNote = (req, res) => {
    const user = req.user
    const { id } = req.params
    user.findByPk(id)
        .then(note => res.send('Success'))
        .catch(err => console.log(err))

}
exports.addNote = (req, res) => {
    const note = req.body
    Note.create(note)
        .then(() => res.send('Success'))
        .catch(err => console.log(err))

}
exports.updateNote = (req, res) => {
    const { id } = req.params
    const { body } = req.body
    Note.findByPk(id)
        .then(note => {
            note.body = body
            return note.save()
        }).then(() => res.send('Success'))
        .catch(err => console.log(err))

}
exports.removeNote = (req, res) => {
    const { id } = req.params
    Note.destroy(id)
        .then(() => res.send('Success'))
        .catch(err => console.log(err))

}

