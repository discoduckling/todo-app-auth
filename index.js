const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');

mongoose.connect(keys.MONGO_URI);

require('./services/passport');

app = express();


app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));