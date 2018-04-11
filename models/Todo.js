const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
    content: String
});

module.exports = todoSchema;

