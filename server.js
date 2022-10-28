const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const routes = require('./routes')
const db = require('./db')

const PORT = process.env.PORT || 3001

const app = express()
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use('/', routes)

db.on('error', console.error.bind(console, 'MongoDB connection error!'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
