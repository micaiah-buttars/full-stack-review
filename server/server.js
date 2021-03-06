require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const authCtrl = require('./authCtrl')

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

const app = express()
app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => {
        console.log(`Listening on port ${SERVER_PORT}`)
    })
})

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
    
}))

app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/user-data', authCtrl.userData)
app.get('/logout', (req, res) => {
    req.session.destroy()
    res.redirect('http://localhost:3000/')
})




