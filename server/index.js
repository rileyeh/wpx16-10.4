require('dotenv').config()
const express = require('express')
const massive = require('massive')
const bc = require('./controllers/books')

const app = express()

app.use(express.json())

const { SERVER_PORT, CONNECTION_STRING } = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected')
}).catch(err => console.log('cannot connect to the db', err))

//books endpoints
app.get('/api/dotcatch', bc.usingADotCatch)
app.get('/api/trycatch', bc.usingTryCatch)
app.get('/api/finally', bc.usingFinally)

app.get('/api/harry', bc.getHarry)

app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))