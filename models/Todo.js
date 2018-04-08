const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
    content: String
});

mongoose.model('todos', todoSchema);

