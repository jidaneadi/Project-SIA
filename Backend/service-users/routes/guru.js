const express = require('express');
const router = express.Router();

const guruHandler = require('./handler/guru');

router.post('/register', guruHandler.regisGuru);
router.get('/', guruHandler.getData);
router.get('/:id', guruHandler.guruById);

module.exports = router;