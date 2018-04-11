const mongoose = require('mongoose');
// const Todo = mongoose.model('todos');
const User = mongoose.model('users');
const requireLogin = require('../middleware/requireLogin');
const { ObjectId } = mongoose;

module.exports = app => {
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
    app.get('/api/todos', (req, res) => {
        res.send(req.user.todos);
    });
    app.post('/api/todos', requireLogin, async (req, res) => {
        const { content } = await req.body;
        const user =  await User.findOneAndUpdate({
            id: req.user.id,
            todos: [...req.user.todos, { content }]
        })
        try {
            await user.save();
            await res.send(req.user.todos);
        } catch (err) {
            res.status(422).send(err);
        }

    });

    app.delete('/api/todos/:id', requireLogin, async (req, res) => {
        var newTodos = req.user.todos;
        const todo_id = mongoose.Types.ObjectId(req.params.id);
        await newTodos.pull( {_id: todo_id});
        
        try {
            req.user.save();
            res.send(req.user.todos);
        } catch (err) {
            res.status(400).send(err);
        }
    })
};