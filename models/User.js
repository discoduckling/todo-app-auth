const mongoose = require('mongoose');
const { Schema } = mongoose;
const todoSchema = require('./Todo');

const userSchema = new Schema({
    googleId: String,
    todos: [todoSchema]
});

mongoose.model('users', userSchema);