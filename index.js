'use strict'

const express = require('express')
const mongoose = require('mongoose')

const mongodb_database = 'mongodb://localhost:27017/mean_stack_setup'
mongoose.connect(mongodb_database)

mongoose.connection.on('connected', () => {
  console.log('Connected to database ' + mongodb_database)
})

mongoose.connection.on('error', (err) => {
  console.log('Database error: ' + err)
})

const app = express()

const port = 3000
app.listen(port, () => {
  console.log('server started on port: ' + port)
})

app.use('/', (req, res, next) => {
  res.send('Home page')
})
