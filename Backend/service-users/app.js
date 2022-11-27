require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const siswaRouter = require('./routes/siswa');
const guruRouter  = require('./routes/guru');
const roleRouter  = require('./routes/role');
const angkatanRouter  = require('./routes/angkatan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/siswa', siswaRouter);
app.use('/guru', guruRouter);
app.use('/role', roleRouter);
app.use('/angkatan', angkatanRouter);


module.exports = app;
