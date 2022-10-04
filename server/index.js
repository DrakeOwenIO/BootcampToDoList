const mongoose = require('mongoose')
require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')

// Requiring some parsing stuff
var bodyParser = require('body-parser')

// MIDDLEWARE
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true})) // to support URL-encoded bodies
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'js')
app.engine('js', require('express-react-views').createEngine())

// ROUTE
app.use('/ToDoList', require('./controller/lists_controller'))

app.get("/api", (req, res) => {
    res.json({ message: "Your To Do List"});
  });

  const listsController = require ('./controller/lists_controller.js')
app.use('/lists', listsController)

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
  () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

// PORT
app.listen(process.env.PORT)