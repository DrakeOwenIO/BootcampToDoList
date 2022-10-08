const mongoose = require('mongoose')
const express = require("express");
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();

app.use(express.json());

const PORT =process.env.PORT || 3000;

app.use(cors());

const TodoItemRoute = require('./routes/todoItems')

mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log("Database connected"))
.catch(err => console.log(err))

app.use('/', TodoItemRoute);

app.listen(PORT, ()=> console.log("Server connected"));