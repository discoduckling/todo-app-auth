const mongoose = require('mongoose');
// const Todo = mongoose.model('todos');
const User = mongoose.model('users');
const requireLogin = require('../middleware/requireLogin');

module.exports = app => {
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
    app.get('/api/todos', (req, res) => {
        res.send(req.user.todos);
    });
    // app.post('/api/todos', requireLogin, async (req, res) => {
    //     // const todo = new Todo({
    //     //     content: req.body.content
    //     // });
    //     const { content } = req.body;
    //     await User.findOneAndUpdate({
    //         id: req.user.id,
    //         todos: [...req.user.todos, { content }]
    //     }).then(user => user.save());
    //     // .then(res.send(req.user.todos));
    //     // res.send(user.todos);
    //     // console.log(req.body);
    //     console.log(content);
    //     await res.send(req.user.todos);
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
        // then(user => user.save());
        // console.log(content);
        // await res.send(req.user.todos);
    });

    // app.delete
};