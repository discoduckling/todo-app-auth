const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    todos: [
        {
            content: String,
            completed: {
                type: Boolean,
                default: false
            }
        }
    ]
});

mongoose.model('users', userSchema);