const mongoose = require('mongoose')
const { Schema } = mongoose

const ToDoListSchema = new Schema({
    name: { type: String, required: true },
})

const ToDoList = mongoose.model('ToDoList', ToDoListSchema)
module.exports = ToDoList