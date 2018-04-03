const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');

const auth0Strategy = new Auth0Strategy({
    domain: keys.AUTH0_DOMAIN,
    clientID: keys.CLIENT_ID_AUTH0,
    clientSecret: keys.CLIENT_SECRET_AUTH0,
    callbackURL: keys.CALLBACK_URL,
}, (accessToken, refreshToken, extraParams, profile, done) => {
    console.log('access token:', accessToken);
    console.log('refresh token: ', refreshToken);
    console.log('extraParams: ', extraParams);
    console.log('profile: ', profile);
    return done(null, profile);
});

passport.use(auth0Strategy);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

//'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJVUkZOVVV5TkVJNU56TkNNRU5GTXpKQ09EYzBNak5DUkRBMVJqUXhPVFl4UXpReE4wTkJNdyJ9.eyJpc3MiOiJodHRwczovL3RvZG8tYXBwLWRpc2NvZHVja2xpbmcuYXV0aDAuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTAzOTM0MDEyODAzODExMzY4MjYwIiwiYXVkIjoidnRWQjAyT1FGZWF6QWdwTER4XzNUYmdPSGU4cHpWQVMiLCJpYXQiOjE1MjI3MjI4MTMsImV4cCI6MTUyMjc1ODgxM30.HqSfQSPQO1g_Bv3rY6SYHSHr6nnSiUIfo6E3EoamlaQ17pzmtJiNlMdR5vcd-W6nDNvUidvPGOnSbWWAc8EvjcND2vBPVQf4YG51wQ1vUsMUp4Gt0PX9GqCNlw21LvQec1wRA0I4xvEyCHdaDDdpKWPJNb1j_AhasnXseQPoLCB8V7mFkSEplvcSF8mL5ELuc7skK1BYkLnRQLhMX3MWtqcBRBULMEwbrg8J9RxFKJgh5lJbUblCOOYKrMsYczglhbUagjMaSrpeBDMfyr1uM5fuL4WUDnwFd5QAqbUXsC4dZL5ZaRx3_2469NLe_UnIkZ5jnScsaQ7edIurbMRNFw'