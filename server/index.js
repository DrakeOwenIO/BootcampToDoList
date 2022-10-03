const express = require("express");
const mongoose = require('mongoose')

// Requiring some parsing stuff
var bodyParser = require('body-parser')

// Require and config env file
require('dotenv').config()
const PORT = process.env.PORT || 3001;
const app = express();

// DEPENDENCIES
const methodOverride = require('method-override')

// MIDDLEWARE
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true})) // to support URL-encoded bodies
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'js')
app.engine('js', require('express-react-views').createEngine())


// ROUTE
app.get("/api", (req, res) => {
    res.json({ message: "Your To Do List"});
  });
  
// lists
const listsController = require ('./controller/lists_controller.js')
app.use('/lists', listsController)

// PORT
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });