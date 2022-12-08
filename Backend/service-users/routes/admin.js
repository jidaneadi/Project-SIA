const express = require('express');
const router = express.Router();
const adminHandler = require('./handler/admin');

router.post('/register', adminHandler.register);

module.exports = router;