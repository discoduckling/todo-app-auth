const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
    content: String,
    _user: req.user.id
});

module.exports = todoSchema;

