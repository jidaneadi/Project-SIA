const express = require('express');
const router = express.Router();

const role = require('./handler/role');

router.post('/register', role.regRole);

module.exports = router;