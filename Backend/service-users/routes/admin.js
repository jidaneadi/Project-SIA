const express = require('express');
const router = express.Router();
const adminHandler = require('./handler/admin');

router.post('/register', adminHandler.register);
router.get('/', adminHandler.allData);

module.exports = router;