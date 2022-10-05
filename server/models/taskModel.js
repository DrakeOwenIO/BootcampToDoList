const mongoose = require('mongoose')
const { Schema } = mongoose

const ToDoListSchema = new mongoose.Schema({
    name: { type: String }
})

const ToDoList = mongoose.model('ToDoList', ToDoListSchema)
module.exports = ToDoList