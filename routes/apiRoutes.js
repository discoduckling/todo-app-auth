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
};