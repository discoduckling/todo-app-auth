const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
require('./models/User');

mongoose.connect(keys.MONGO_URI);

require('./services/passport');

app = express();
app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 3 * 60 * 60 *1000,
        keys: [keys.COOKIE_KEY]
    })
)

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/apiRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));