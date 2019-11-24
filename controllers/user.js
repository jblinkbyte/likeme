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
            res.send(err)
            if (err) throw new Error(err)
        })

}