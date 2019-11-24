const Sequelize = require('sequelize')

const sequelize = new Sequelize('like_me', 'root', 'password', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize