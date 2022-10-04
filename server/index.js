const mongoose = require('mongoose')
require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const conn_str = "mongodb+srv://Drake:MonGodB3@todolist.pggfoz9.mongodb.net/?retryWrites=true&w=majority"

// Requiring some parsing stuff
var bodyParser = require('body-parser')

// Connect to Mongo
mongoose.connect(
  conn_str,
  { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
  },(err) => {
  if (err) {
  console.log("error in connection");
  } else {
  console.log("mongodb is connected");
  }});

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


// PORT
app.listen(process.env.PORT)