const Sequelize = require('sequelize')
const db = require('../util/db')

const Note = db.define('note', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    body: {
        type: Sequelize.STRING(30),
        allowNull: false
    }
})


module.exports = Note