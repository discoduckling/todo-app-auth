module.exports = app => {
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
    app.get('/api/todos', (req, res) => {
        res.send(req.user.todos);
    });
};