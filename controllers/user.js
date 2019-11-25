const errors = require('../util/errors')
const User = require('../models/user')
const logger = require('../util/logger').logger
const Note = require('../models/note')

exports.getUsers = (req, res) => {
    User.findAll()
        .then((users) => {
            res.send('success')
            console.log(users)
        })
        .catch((err) => console.log(err))
}

exports.getUser = (req, res) => {
    const { id } = req.params
    console.log(id)
    User.findByPk(id)
        .then((user) => {
            res.send('success')
            return user

        }).catch((err) => {
            console.log(err)
        })
}
exports.addUser = (req, res) => {
    User.create({ ...req.body })
        .then((user) => {
            user.save()
        })
        .then(() => {
            res.send('user added')
        })
        .catch((err) => {
            const errorMessage = errors(err)
            res.send(errorMessage)
            throw new Error(errorMessage)
        })

}

exports.removeUser = (req, res) => {
    const { id } = req.params
    User.findOne({
        where: { id }
    }).then((user) => {
        if (user) { user.destroy() }
        res.send('user deleted')
    }).catch((err) => {
        const errorMessage = errors(err)
        res.send(errorMessage)
        throw new Error(errorMessage)
    })
}

exports.updateUser = (req, res) => {
    const { id } = req.params
    const { userName } = req.body

    User.findByPk(id)
        .then((user) => {
            user.userName = userName
            return user.save()
        })
        .then((result) => {
            res.send('user updated')
        })
        .catch((err) => {
            console.log(err)
        })
}

exports.addNote = (req, res) => {
    const userId = 1
    const note = req.body.note
    User.findByPk(userId)
        .then(user => {
            return user.createNote(note)

        })
        .then(() => {
            res.send('Success')
        })
        .catch(err => console.log(err))
}


exports.updateNote = (req, res) => {
    const { id, body } = req.body

    Note.findByPk(id)
        .then((note) => {
            note.body = body
            return note.save()
        })
        .then(() => {
            res.send('success')
        })
        .catch(err => {
            console.log(err)
        })
}

exports.removeNote = (req, res) => {
    const { id } = req.body
    Note.findByPk(id)
        .then((note) => {
            if (note) {
                return note.destroy()
            }
        })
        .then(() => {
            res.send('success')
        })
        .catch(err => console.log(err))
}







