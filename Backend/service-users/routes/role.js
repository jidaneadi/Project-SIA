const express = require('express');
const router = express.Router();

const role = require('./handler/role');

router.post('/register', role.register);
router.get('/', role.roleAll);

module.exports = router;