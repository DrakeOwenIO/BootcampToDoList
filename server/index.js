const mongoose = require('mongoose')
const express = require("express");
const app = express();
const cors = require('cors');
const taskModel = require('./models/taskModel')
const conn_str = "mongodb+srv://Drake:MonGodB3@todolist.pggfoz9.mongodb.net/?retryWrites=true&w=majority"

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

const PORT = process.env.PORT || 3001;

// MIDDLEWARE
app.use(express.json({extended: false}));
app.use(cors());

// GET ROUTE
app.get("/tasks", async (request, response) => {
  const tasks = await taskModel.find({});
  try {
    response.send(tasks);
  } catch (error) {
    response.status(500).send(error);
  }
});
 
//POST  
app.post("/task", async (request, response) => {
  const task = new taskModel(request.body);
  try {
    await task.save();
    response.send.json(task);
  } catch (error) {
    response.status(500).send(error);
  }
  });
 
// PORT
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });