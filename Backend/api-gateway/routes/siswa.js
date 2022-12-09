const express = require('express');
const router = express.Router();
const siswa = require('./handler/siswa');

router.get('/', siswa.data );
router.get('/:id', siswa.dataById);
router.post('/update/:id', siswa.register);
router.put('/update/:id', siswa.update);
router.delete('/delete/:id', siswa.del);

module.exports = router;
