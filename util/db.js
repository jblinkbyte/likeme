const Sequelize = require('sequelize')

const db = new Sequelize('like_me', 'root', 'password', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = db