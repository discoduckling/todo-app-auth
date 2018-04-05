module.exports = app => {
    app.get('/api/current_user', (req, res) => {
        console.log(req.user);
        res.redirect('/');
    });
    app.get('/api/todos', (req, res) => {
        console.log(req.user.todos);
        res.redirect('/');
    });
};