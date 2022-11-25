const express = require('express');
const router = express.Router();

const role = require('./handler/role');

router.post('/register', role.register);
router.get('/', role.roleAll);
router.get('/:id', role.roleById);

module.exports = router;