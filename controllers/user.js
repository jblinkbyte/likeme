const errors = require('../util/errors')
const User = require('../models/user')
const logger = require('../util/logger').logger
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
    const { id } = req.body
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
    logger('hit')
    const { id } = req.body
    // const updatedUser = { ...req.body }

    User.findOne({ where: { id } })

        .then((user) => {
            const updatedUser = { ...user }
            let json = JSON.stringify(req.body)
            console.dir(`updatedUser is ${json}`)
            user.update({ values: { ...user, ...updatedUser } }).then((user) => { console.log(user) })
            res.send('user has been updated')

        })
        .catch((err) => {
            console.log(err)
        })
}