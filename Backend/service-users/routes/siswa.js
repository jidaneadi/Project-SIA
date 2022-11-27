const express = require('express');
const router = express.Router();

const siswa = require('./handler/siswa');

router.get('/', siswa.allData);
router.get('/:id', siswa.dataByID);
router.post('/register', siswa.registerSiswa);
router.put('/update/:id', siswa.updateData);
router.delete('/delete/:id', siswa.delSiswa);

module.exports = router;
