const mongoose = require('mongoose');
const Todo = mongoose.model('todos');
const User = mongoose.model('users');
const requireLogin = require('../middleware/requireLogin');

module.exports = app => {
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
    app.get('/api/todos', (req, res) => {
        res.send(req.user.todos);
    });
    app.post('/api/todos', requireLogin, (req, res) => {
        const todo = new Todo({
            content: 'test'
        });
        User.findOneAndUpdate({
            id: req.user.id,
            todos: [...req.user.todos, todo]
        }).then(user => user.save());
        res.send(req.user.todos);
    });

    // app.delete
};