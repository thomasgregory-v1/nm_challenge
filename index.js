'use strict'

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const mongodb_database_URI = 'mongodb://localhost:27017'
const mongodb_database_name = '/test'
mongoose.connect(mongodb_database_URI + mongodb_database_name)

mongoose.connection.on('connected', () => {
  console.log(
    'Connected to database ' + mongodb_database_URI + mongodb_database_name,
  )
})

mongoose.connection.on('error', (err) => {
  console.log('Database error: ' + err)
})

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(port, () => {
  console.log('server started on port: ' + port)
})

app.get('/', (req, res, next) => {
  res.send('Home page thing')
})

app.get('/mockAPI', (req, res, next) => {
  res.json("{fake:'value'}")
})

const tableSchema = mongoose.Schema(
  {
    room: Number,
    TableNumber: Number,
    NumberOfSeats: Number,
  },
  { collection: 'gamingTable' },
)

const Table = mongoose.model('gamingTable', tableSchema)

app.get('/APItest', async (req, res, next) => {
  console.log('testing find with mongoose')
  let table = await Table.find() //{ Room: { $eq: 1 } })
  res.json(table)
})
