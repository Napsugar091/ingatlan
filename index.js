const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const ingatlanRoutes = require('./ingatlan.router');
const app = express();

app.use(cors());
app.use(logger('dev'));

app.use('/api', ingatlanRoutes);

app.listen(3000, () => {
    console.log('listening on port 3000');
});