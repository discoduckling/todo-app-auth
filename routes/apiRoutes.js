const mongoose = require('mongoose');
const Todo = mongoose.model('todos');
const User = mongoose.model('users');

module.exports = app => {
    app.get('/api/current_user', (req, res) => {
        // console.log(req.user);
        res.send(req.user);
    });
    app.get('/api/todos', (req, res) => {
        // console.log(req.user.todos);
        // res.redirect('/');
        res.send(req.user.todos);
    });
    app.post('/api/todos', (req, res) => {
        // console.log(req.body);
        const todo = new Todo({
            content: 'test'
        });
        // console.log(todo);
        User.findOneAndUpdate({
            id: req.user.id,
            todos: [...req.user.todos, todo]
        }).then(user => user.save());
        res.send(req.user.todos);
    });
    // app.get('/api/todos/test', (req, res) => {
    //     const todo = new Todo ({
    //         content: 'test'
    //     });
    //     console.log(todo);
    //     User.findOneAndUpdate({
    //         id: req.user.id,
    //         todos: [...req.user.todos, todo]
    //     }).then(user => user.save());
    //     // User.findById(req.user.id)
    //     res.send(req.user);
    // });
    // app.delete
};