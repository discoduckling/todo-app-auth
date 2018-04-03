const passport = require('passport');
const keys = require('../config/keys');

module.exports = app => {
    app.get(
        '/auth/auth0/callback',
        passport.authenticate('auth0', {
            failureRedirect: '/'
        }), (req, res) => {
            res.redirect('/');
        });

    app.get('/login', passport.authenticate('auth0', {
        clientID: keys.CLIENT_ID_AUTH0,
        domain: keys.AUTH0_DOMAIN,
        redirectUri: keys.CALLBACK_URL,
        audience: 'https://' + keys.AUTH0_DOMAIN + '/userinfo',
        responseType: 'code',
        scope: 'openid'
    }, (req, res) => {
        res.redirect('/')
    }))

    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/')
    });


    app.get('/', (req, res) => {
        res.send({ hi: 'there' });
    })
}