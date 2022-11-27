const express = require('express');
const router = express.Router();

const guruHandler = require('./handler/guru');

router.post('/register', guruHandler.regisGuru);
router.get('/', guruHandler.getData);

module.exports = router;