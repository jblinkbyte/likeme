const express = require('express')
const app = express()


/* SET PORT */
const PORT = process.env.PORT || 3000

/* IMPORT DB */
const db = require('./util/db')
global.debug = true

/* IMPORT MODELS */

const User = require('./models/user')
const Note = require('./models/note')


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

/* 
    DUMMY USER
*/

// app.use((req, res, next) => {
//     User.findByPk(1)
//         .then((user) => {
//             req.user = user
//             next()
//         })
//         .catch(err => console.log(err))
// })

// app.use((req, res, next) => {
//     req.note = { body: 'hello from the server' }
//     // console.log(req.note)
//     next()
// })
/* 
Import routes
*/
const userRoutes = require('./routes/user')
const noteRoutes = require('./routes/note')

app.get('/', (req, res) => {
    res.send('<h1>Root</h1>')
})



app.use('/user', userRoutes)
app.use('/note', noteRoutes)

/* DEFINE RELATIONSHIPS */

Note.belongsTo(User, { contraints: true, onDelete: 'CASCADE' })
User.hasMany(Note)



db.sync({ force: true })
    .then(() => {
        return User.findByPk(1)
    })
    .then(user => {
        if (!user) {
            return User.create({ userName: 'jason', email: 'jayscooke@gmail.com' })
        } else { return user }
    })
    .then(user => {
        return user.createNote({ body: 'hjks Memo' })
    })
    .then(() => {
        // console.log(result);
        app.listen(PORT, () => console.log('running server'))
    })
    .catch(err => {
        console.log(err);
    });
