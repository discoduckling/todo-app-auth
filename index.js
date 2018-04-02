const express = require('express');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

app = express();

const auth0Strategy = new Auth0Strategy({
    domain: 'https://todo-app-discoduckling.auth0.com',
    clientID: 'vtVB02OQFeazAgpLDx_3TbgOHe8pzVAS',
    clientSecret: 'E88a-S2nNAQ5ZMV-B_K7DfTfx3QZKBFuVZYB1kg9YkQH1VNZcC-ZcIK9yHlaYAGb',
    callbackURL: '/auth/auth0/callback'
});

passport.use(auth0Strategy);

app.get('/auth/auth0/callback', passport.authenticate('auth0', (req, res) => {
    res.send('login successful');
}));

// app.get('/', (req, res) => {
//     res.send({hi: 'there'});
// })

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));