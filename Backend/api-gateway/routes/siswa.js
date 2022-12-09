const express = require('express');
const router = express.Router();
const siswa = require('./handler/siswa');

router.put('/update/:id', siswa.update);

module.exports = router;
