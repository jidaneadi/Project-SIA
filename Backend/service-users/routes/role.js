const express = require('express');
const router = express.Router();

const role = require('./handler/role');

router.post('/register', role.register);
router.get('/', role.roleAll);
router.get('/:id', role.roleById);
router.put('/update/:id', role.update);
router.delete('/delete/:id', role.delRole);

module.exports = router;