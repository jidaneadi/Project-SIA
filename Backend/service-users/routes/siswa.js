const express = require('express');
const router = express.Router();

const siswa = require('./handler/siswa');

router.get('/', siswa.allData);
router.post('/register', siswa.registerSiswa);

module.exports = router;
