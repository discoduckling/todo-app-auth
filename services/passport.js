const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const keys = require('../config/keys');


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
