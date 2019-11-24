const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const sequelize = require('./util/db')
global.debug = true

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


const userRoutes = require('./routes/user')

app.get('/', (req, res) => {
    res.send('<h1>Root</h1>')
})

app.use('/user', userRoutes)

sequelize
    .sync({ force: true })
    .then(result => {
        // console.log(result);
        app.listen(PORT, () => console.log('running server'))
    })
    .catch(err => {
        console.log(err);
    });
