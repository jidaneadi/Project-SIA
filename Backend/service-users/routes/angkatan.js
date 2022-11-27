const express = require('express');
const router  = express.Router();

const angkatan = require('./handler/angkatan');

router.get('/', angkatan.getAngkatan);
router.get('/:id', angkatan.getID);
router.post('/register',angkatan.register);

module.exports = router;