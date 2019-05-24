const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const expressValidator = require('express-validator')
const routes = require('./routes')

require('./handlers/passport')

const app = express()

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(expressValidator())
app.use('/', routes)

module.exports = app
